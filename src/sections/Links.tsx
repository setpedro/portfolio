import SimpleCard from "@/components/SimpleCard";

export default function Links() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <h1 className="text-3xl font-bold">Links</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        <SimpleCard
          text="@_setPedro"
          icon="/Links/TwitterLogo.svg"
          link="https://x.com/_setPedro"
          className="hover:opacity-70"
        />
        <SimpleCard
          text="@setPedro"
          icon="/Links/GithubLogo.svg"
          link="https://github.com/setPedro"
          className="hover:opacity-70"
        />
      </div>
    </div>
  );
}
