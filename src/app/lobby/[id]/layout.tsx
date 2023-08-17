import { Metadata } from 'next'

type Props = {
  params: { username: string };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  var metaData = {
    "title": 'Invalid User',
    "description": 'Invalid User'
  };

  return {
    "title": `${metaData.title} - H`,
    "description": metaData.description
  }
}

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  )
}