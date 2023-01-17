import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Test Deno App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <p class="my-6">
          Test Deno App with Marwan
        </p>
      </div>
    </>
  );
}
