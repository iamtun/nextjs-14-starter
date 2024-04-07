export default function Layout({
  user,
  admin,
}: {
  user: React.ReactNode;
  admin: React.ReactNode;
}) {
  const role = 'admin';
  return <>{role === 'admin' ? admin : user}</>;
}
