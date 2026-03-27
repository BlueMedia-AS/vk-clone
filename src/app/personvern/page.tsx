import Header from "@/components/premium/Header";
import Footer from "@/components/premium/Footer";

export default function PersonvernPage() {
  return (
    <>
      <Header />
      <main className="pt-34">
        <section className="py-20 bg-vk-green">
          <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">Personvernerklæring</h1>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 prose max-w-3xl">
            <p className="text-vk-gray text-lg">Personvernerklæring kommer snart.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
