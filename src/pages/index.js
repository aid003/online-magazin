import styles from "@/styles/index.module.css";
import MainContainer from "@/components/MainContainer";
import Slider from "@/components/Slider/Slider";
import axios from "axios";
import Image from "next/image";
import Product from "@/components/Products/Product";

function Home({ products }) {
  return (
    <>
      <MainContainer>
        <Slider />
        <div className={styles.container}>
          <h2 className={styles.heading}>Товары недели</h2>
          <ul className={styles.productHolder}>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </MainContainer>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:5000/api/get-all-products/");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
};

export default Home;
