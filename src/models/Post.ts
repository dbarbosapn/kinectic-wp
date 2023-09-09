import EmbeddedData from "./EmbeddedData";
import HtmlData from "./HtmlData";

export default interface Post {
    id: number,
    date: Date,
    title: HtmlData,
    content: HtmlData,
    excerpt: HtmlData,
    categories: number[],
    link: string,
    _embedded: EmbeddedData,
}