export default function shortenAddress(address) {
    let aLength = address.length
    if (aLength!=42) {
        return '';
    } else {
        return address.slice(0,6) + "..." + address.slice(aLength - 6 , aLength)
    }
}