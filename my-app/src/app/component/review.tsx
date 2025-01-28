// components/HappyCustomers.js
const HappyCustomers = () =>{

    const testimonials = [
      {
        name: "Sarah M.",
        review:
          "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        stars: 5,
      },
      {
        name: "Alex K.",
        review:
          "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
        stars: 5,
      },
      {
        name: "James L.",
        review:
          "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        stars: 5,
      },
    ];
    return (
      <div className="bg-gray-50 py-10 px-6 sm:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Happy Customers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="flex">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-yellow-500"
                    >
                      <path d="M12 .587l3.668 7.429L24 9.753l-6 5.847L19.336 24 12 19.794 4.664 24l1.336-8.4L0 9.753l8.332-1.737L12 .587z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.review}"</p>
              <p className="font-bold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  export default HappyCustomers;