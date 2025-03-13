document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            {id: 1, name: "Robusta Brazil", img: "1.jpg", price: 20000},
            {id: 2, name: "Arabica Blend", img: "2.jpeg", price: 25000},
            {id: 3, name: "Primo Passo", img: "3.jpeg", price: 30000},
            {id: 4, name: "Aceh Gayo", img: "4.jpeg", price: 35000},
            {id: 5, name: "Sumatra Mandheling", img: "5.jpeg", price: 40000},
        ],
    }))

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem){
            // cek ada barang yang sama
            const cartItem = this.items.find((item) => item.id === newItem.id)

            // jika belum ada
            if(!cartItem){
                this.items.push({...newItem, quantity: 1, total: newItem.price})
                this.quantity++
                this.total += newItem.price
            } else {
                // jika barang ada, cek apa barang sama di cart
                this.items = this.items.map((item) => {
                    // jika barang berbeda
                    if(item.id !== newItem.id){
                        return item
                    } else {
                        // jika barang ada, tambah quantity dan total nya
                        item.quantity++
                        item.total = item.price * item.quantity
                        this.quantity++
                        this.total += item.price
                        return item
                    }
                })
            }
            
        },
        remove(id){
            // ambil item yg mau di remove berdasarkan id
            const cartItem = this.items.find((item) => item.id === id)

            // jika item lebih dari 1
            if (cartItem.quantity > 1) {
                //  telusuri 1 1
                this.items = this.items.map((item) => {
                    // jika bukan barang yang di klik
                    if(item.id !== id){
                        return item
                    } else{
                        item.quantity--
                        item.total = item.price * item.quantity
                        this.quantity--
                        this.total -= item.price
                        return item
                    }
                })
            } else if(cartItem.quantity === 1){
                // jika barang nya sisa 1
                this.items = this.items.filter((item) => item.id !== id)
                this.quantity--
                this.total -= cartItem.price
            }
        }
    })
})

// konversi rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number)
}