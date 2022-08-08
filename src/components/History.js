import Footer from "./Footer";
import Header from "./Header";


export default function History({ Token }) {
  
  const token = {
		config: {
			headers: {
				Authorization: `Bearer ${Token}`,
			},
		},
  };
  
  return (
    <>
      <Header />
      
      <Footer />
        
    </>
  )
}