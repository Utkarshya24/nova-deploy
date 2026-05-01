import { client, urlFor } from "@/lib/sanity";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import Link from "next/link";

export const revalidate = 60; // Revalidate every minute

async function getPost(slug: string) {
  const query = groq`*[_type == "post" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    "author": author->{name, "image": image.asset->url, bio},
    "mainImage": mainImage.asset->url,
    publishedAt,
    categories[]->{title},
    body,
    description
  }`;
  
  const post = await client.fetch(query, { slug });
  return post;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-white relative overflow-hidden min-h-screen">
      {/* Article Header */}
      <section className="relative pt-32 pb-16 px-6 max-w-4xl mx-auto w-full">
        <Link href="/blog" className="text-brand font-bold text-[14px] mb-8 inline-flex items-center gap-2 group">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
          Back to Blog
        </Link>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {post.categories?.map((cat: any, i: number) => (
            <span key={i} className="bg-bg-blue-tint text-brand text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {cat.title}
            </span>
          ))}
        </div>

        <h1 className="text-[40px] md:text-[56px] font-heading font-extrabold text-text-heading leading-[1.1] tracking-[-0.02em] mb-8">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 mb-12 pb-12 border-b border-border-default">
           <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center font-bold text-lg">
             {post.author?.name?.slice(0, 2).toUpperCase() || "DC"}
           </div>
           <div className="flex flex-col">
              <span className="text-[16px] font-bold text-text-heading">{post.author?.name || "DCDeploy Team"}</span>
              <span className="text-[14px] text-text-muted">
                {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
           </div>
        </div>

        {post.mainImage && (
          <div className="w-full aspect-video rounded-[32px] overflow-hidden mb-16 shadow-2xl">
            <img src={post.mainImage} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Content Area */}
        <article className="prose prose-lg max-w-none prose-slate prose-headings:font-heading prose-headings:font-bold prose-a:text-brand">
           {/* Simple rendering of description as lead */}
           <p className="text-xl text-text-body font-medium leading-relaxed mb-8">
             {post.description}
           </p>
           
           {/* In a real scenario, you'd use @portabletext/react for the body field */}
           <div className="text-text-body leading-[1.8] space-y-6">
              <p>This is a preview of the article content. To render full rich text from Sanity, you would typically use the PortableText component.</p>
              <p>DCDeploy provides the fastest way to get your code into production. With our global edge network, your users experience minimal latency, and our automated pipelines handle the complexity of scaling.</p>
           </div>
        </article>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-bg-page py-24 px-6 mt-16 border-t border-border-default">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[32px] font-heading font-bold text-text-heading mb-6">Ready to ship?</h2>
            <p className="text-[18px] text-text-muted mb-10">Join thousands of developers building the future on DCDeploy.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button className="px-8 py-4 bg-brand text-white rounded-full font-bold shadow-lg shadow-brand/20">Start Building Now</button>
               <Link href="/pricing" className="px-8 py-4 bg-white border border-border-default text-text-heading rounded-full font-bold">View Pricing</Link>
            </div>
         </div>
      </section>
    </div>
  );
}
