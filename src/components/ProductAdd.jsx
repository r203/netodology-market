import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from './../redux/actions/actionCreators';

const ProductAdd = () => {
  const [form, setForm] = useState({
    productName: "",
    price: 0,
    oldPrice: 0,
    mainImage: '',
  })

  const dispatch = useDispatch()

  const fileToDataUrl = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.addEventListener('load', evt => {
        resolve(evt.currentTarget.result);
      });

      fileReader.addEventListener('error', evt => {
        reject(new Error(evt.currentTarget.error));
      });

      fileReader.readAsDataURL(file);
    });
  }

  const handleFormChange = async (event) => {
    let { name, value } = event.target;

    setForm((prevForm) => ({ ...prevForm, [name]: value }))
    // console.log(form);
  }

  const handleSelectFiles = async (evt) => {
    const files = [...evt.target.files];
    const mainImage = await Promise.all(files.map(o => fileToDataUrl(o)));
    setForm(
      prevForm => ({ ...prevForm, 'mainImage': mainImage })
    )
  }

  const handleAddProduct = (event) => {
    event.preventDefault();
    dispatch(addProduct(form))
    
    setForm({
      productName: "",
      price: 0,
      oldPrice: 0,
      mainImage: '',
    })
  }

  return (
    <form onSubmit={handleAddProduct}>
      <div>
        <label forhtml="productName">Название товара</label>
        <input type="text" id="productName" name="productName" value={form.productName} onChange={handleFormChange} required />
      </div>
      <div>
        <label forhtml="price">Цена</label>
        <input type="number" id="price" name="price" value={form.price} onChange={handleFormChange} required />
      </div>
      <div>
        <label forhtml="oldPrice">Старая цена</label>
        <input type="number" id="oldPrice" name="oldPrice" value={form.oldPrice} onChange={handleFormChange} required />
      </div>
      <div>
        <label htmlFor="mainImage">Click to select</label>
        <input type="file" id="mainImage" name="mainImage" multiple accept="image/*" onChange={handleSelectFiles} />
      </div>
      <button>Добавить</button>
    </form>
  )
}

export default ProductAdd;