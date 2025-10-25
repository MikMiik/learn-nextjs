type Props = {
  params: Promise<{ slug: string[] }>;
};

const PostDetail = async ({ params }: Props) => {
  const { slug } = await params;
  if (!slug) {
    return <h1>Post List</h1>;
  }
  console.log(slug);

  return <div className="">PostDetail</div>;
};

export default PostDetail;
