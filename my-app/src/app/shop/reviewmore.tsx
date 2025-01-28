// components/HappyCustomers.js
const ReviewMore = () =>{

    const testimonials = [
      {
        stars:5,
        review:"The t-shirt is a must have for anyone who appreciate good design. The minimalistuc yet stylish pattern caught my eye,and the fit is perfect.I can see the designer's touch in every aspect of this t-shirt.",
        date:"Posted on August 16,2023",
        name: "Ethan R.",
        
      },
      {
        name: "Alex M.",
        review:"As a UI/UX enthusiast ,I value simplicity and functionality.This t-shirt not only represent those principles but also feels great to wear .Its evident that the designer poured their creativity into making this t-shirt stand out ",
        date:"Posted on August 17,2023",
        stars: 5,
      },
      
      
      
    ];
  
    return (
      <div className="bg-gray-50 py-10 px-6 sm:px-12">
        
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
  export default ReviewMore