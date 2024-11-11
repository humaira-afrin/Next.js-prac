import Image from "next/image";
import Link from "next/link";
import ProductCard from "./Components/ProductCard";
import UsersPage from "./users/page";

export default function Home() {
  return (
    <main>
      <h1>Hej ARA </h1>
      <Link href = "/users">Users</Link>
       <ProductCard />  

    </main>
  )
}
    