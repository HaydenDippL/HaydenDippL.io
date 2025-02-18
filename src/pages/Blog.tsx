import { useEffect, useState } from "react"
import { useParams } from "react-router";

import { get_blog } from "../scripts/Blogs";

import { BlogData } from "../types/BlogTypes";

import ArticleContent, { ArticleNotFound } from "../components/ArticleContent";
import { ArticleType } from "../scripts/ArticleStorage";

export default function Blog() {
    const { id } = useParams();
    const [blog, set_blog] = useState<BlogData | undefined>(undefined);

    useEffect(() => {
        set_blog(get_blog(id));
    }, [id]);

    if (blog === undefined)
        return <ArticleNotFound mode={ArticleType.blog} />
    
    return <div className="flex flex-col justify-center items-center w-full max-md:mt-8">
        <div className="flex flex-col w-fill items-center p-4">
            <ArticleContent mode={ArticleType.blog} article={blog} />
        </div>
    </div>
}