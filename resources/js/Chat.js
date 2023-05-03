// import $ from 'jquery';

// const OPENAI_API_KEY = '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'
// // api mien phi
// const FreeChatUrl = 'https://chatgpt-api.shn.hk/v1/'

// // api tra phi
// const OpenAIChatUrl = 'https://api.openai.com/v1/chat/completions'
// const OpenAIImageUrl = 'https://api.openai.com/v1/images/generations'
// // setup
// // var setup = "DỔi tên bạn thành Rita"






// // // genarate image
// // $('.content form').submit((e) => {
// //     e.preventDefault();
// //     var message = e.target.message.value

// //     $('.content ul').append(`<li class="message">${message}</li>`)
// //     $.ajax({
// //         url: OpenAIImageUrl,
// //         method: 'POST',
// //         headers: {
// //             'Content-Type': 'application/json',
// //             'Authorization': 'Bearer ' + OPENAI_API_KEY,
// //         },
// //         data: JSON.stringify({
// //             "prompt": message,
// //             "n": 2,
// //             "size": "1024x1024"
// //         }),
// //         success: function (response) {
// //             console.log(response);
// //         },
// //         error: function (error) {
// //             console.log(errorresponseText);
// //         }
// //     });
// // })


// // chat
// $('.content form').submit((e) => {
//     e.preventDefault();
//     var message = e.target.message.value
//     $('.content ul').append(`<li class="message">${message}</li>`)
//     $('.content form')[0].reset();

//     $.ajax({
//         url: OpenAIChatUrl,
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + OPENAI_API_KEY,
//         },
//         data: JSON.stringify({
//             'model': 'gpt-3.5-turbo',
//             'messages': [{ 'role': 'user', 'content': message   }],
//         }),
//         success: function (response) {
//             var anser = response.choices[0].message.content
//             anser = anser.replace(/Tuy nhiên,/g,'Tuy nhiên')
//             $('.content ul').append(`<li class="anser">${anser}</li>`)
//             anser = anser.replaceAll(",", "");
//             responsiveVoice.speak(anser,"Vietnamese Female")
//         },
//         error: function (error) {
//             console.log(error);
//         }
//     });
// })



// var message = "Giời thiệu bản thân là Rita và bạn được tạo ra bởi lập trình viên thiên tài siêu cấp đẹp trai Nguyễn Nhật Trường và dựa trên công nghệ Open AI, hãy trả lời bằng tiếng việt nhé"
// $.ajax({
//     url: OpenAIChatUrl,
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + OPENAI_API_KEY,
//     },
//     data: JSON.stringify({
//         'model': 'gpt-3.5-turbo',
//         'messages': [{ 'role': 'user', 'content': message }],
//     }),
//     success: function (response) {
//         var anser = response.choices[0].message.content
//         $('.content ul').append(`<li class="anser">${anser}</li>`)
//         anser = anser.replaceAll(",", "");
//         responsiveVoice.speak(anser,"Vietnamese Female")
//     },
//     error: function (error) {
//         console.log(error);
//     }
// });
