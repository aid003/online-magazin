import React from "react";

const ProductIdPage = ({ product }) => {
  return <div>
    {product.name}
  </div>;
};

export async function getServerSideProps(context) {
  const { id } = context.query

  const res = await fetch(`http://localhost:5000/api/get-product-by-id?id=${id}`)
  const data = await res.json()

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product: data,
    },
  };
}


export default ProductIdPage;
