import ServiceItem from '../ServiceItem'
import './Services.css'

const servicesData = [
    {
        title: 'Pavadinimas', 
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, et! Sint praesentium et quis sit quaerat quibusdam adipisci tempore fuga cupiditate. Id nostrum ratione dolor vero sit et omnis. Aspernatur.",
        buttonText: "Click"
    },
    {
        title: 'Pavadinimas 2', 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laboriosam delectus magnam deleniti, corporis iure ad! Dolore debitis, aliquid iure, impedit sint placeat nulla fuga maxime corrupti nihil optio odit?",
        buttonText: "Press"
    },
    {
        title: 'Pavadinimas 3', 
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam ad recusandae atque doloremque eaque laborum numquam saepe tempore explicabo. Beatae consequuntur animi, voluptatum nisi ipsum doloribus vitae consectetur ipsa!",
        buttonText: "Newsletter"
    },
    {
        title: 'Pavadinimas 4', 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus sunt dignissimos molestias dolor. Eveniet corrupti, praesentium, nesciunt qui saepe quis odio eius soluta omnis nam distinctio quae dicta. Ipsa.",
        buttonText: "Read More"
    },
]

function Services() {
    // Pirmas budas: perduodant visus props atskirai
    // const servicesList = servicesData.map((item, index) => (
    //     <ServiceItem 
    //         key={index}
    //         title={item.title} 
    //         description={item.description} 
    //         buttonText={item.buttonText} 
    //     />
    // ))

    // Antras budas: perduodant viena props kaip objekta
    // const servicesList = servicesData.map((item, index) => <ServiceItem key={index} data={item} /> )

    return (
        <div className='services-wrapper'>
            <h2 id="asasd" className='section-title'>Services:</h2>

            <div className='service-list'>
                {servicesData.map((item, index) => <ServiceItem key={index} data={item} /> )}

                {/* {servicesList} */}

                {/* {servicesData.map((item, index) => (
                    <ServiceItem 
                        key={index}
                        title={item.title} 
                        description={item.description} 
                        buttonText={item.buttonText} 
                    />
                ))} */}

            </div>
        </div>
    )
}

export default Services