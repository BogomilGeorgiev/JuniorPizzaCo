const API_URL = 'https://react-fast-pizza-api.onrender.com/api';


export async function getMenu() {
    const res = await fetch(`${API_URL}/menu`);

    if (!res.ok) throw new Error('Failed fetching menu');

    const { data } = await res.json();

    return data;

}

export async function getOrder(id) {
    const res = await fetch(`${API_URL}/order/${id}`)

    if (!res.ok) throw new Error('Error getting order.')

    const { data } = await res.json();

    return data;
}

export async function createOrder(newOrder) {
    try {
        const res = await fetch(`${API_URL}/order/`, {
            method: 'POST',
            body: JSON.stringify(newOrder),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!res.ok) throw new Error();

        const { data } = await res.json();

        return data;

    } catch (error) {
        throw new Error('There was an error sending your order')

    }

}

export async function updateOrder(id, updateObj) {
    try {
        const res = await fetch(`${API_URL}/order/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(updateObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!res.ok) throw new Error();


    } catch (error) {
        throw new Error('Failed to update the order')

    }
}



