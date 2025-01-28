// components/HappyCustomers.js
const ReviewLast = () =>{

    const testimonials = [
      {
        stars:5,
        review:"This t-shirt is a fusion of comfort and creativity.The fabric is soft,and the design speaks about the designer's skill.It's like wearing a piece of art that reflects my passion for both design and fashion ",
        date:"Posted on August 18,2023",
        name: "Liam K",
        
      },
      {
        name: "Ava H.",
        review:"i'm not just wearing a t-shirt:i'm wearing a piece of design philosophy.The intricate details and thoughtful layout of the design make this shirt a conversation starter  ",
        date:"Posted on August 19,2023",
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
  export default ReviewLast