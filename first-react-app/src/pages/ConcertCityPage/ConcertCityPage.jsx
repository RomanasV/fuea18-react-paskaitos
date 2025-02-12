import { useParams } from "react-router"

function ConcertCityPage() {
    const { city } = useParams()

    return (
        <h1>{city}</h1>
    )
}

export default ConcertCityPage