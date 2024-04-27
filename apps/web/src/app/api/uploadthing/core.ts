import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { auth } from '@/auth';

const f = createUploadthing();

const handleAuth = async () => {
  const { user } = await auth();
  if (!user.id) throw new Error('Unauthorized');
  return { userId: user.id };
};

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter: any = {
  serverImage: f({ image: { maxFileSize: '4MB' } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  messageFile: f(['image', 'pdf'])
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
