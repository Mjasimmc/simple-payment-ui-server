import mongoose from 'mongoose';

export default async (url) => {
    await mongoose.connect(url + '/upi-payment')
        .then(() => console.log("db connected", url))
        .catch(() => console.log("db not connected", url))

}