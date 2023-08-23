// const { Boards, Auths } = require("../models");
// const { sequelize } = require("../models");

// class postsRepository {
//   findAllBoard = async () => {
//     // ORM인 Sequelize에서 Posts 모델의 findAll 메소드를 사용해 데이터를 요청합니다.
//     const boards = await Boards.findAll();
//     // 요청한 데이터를 리턴
//     return boards;
//   };

//   //생성
//   createBoard = async (boardTitle, boardContent, userId) => {
//     try {
//       await sequelize.transaction(async (t) => {
//         const createBoardData = await Boards.create({
//           boardTitle,
//           boardContent,
//           userId,
//           transaction: t,
//         });

//         const boardId = createBoardData.boardId;
//         const authId = userId;

//         await Auths.create({
//           boardId,
//           authId,
//           transaction: t,
//         });
//       });
//     } catch (Error) {
//       throw Error;
//     }
//   };
//   //수정
//   putBoard = async (boardId, boardTitle, boardContent) => {
//     const modifyData = await Boards.update(
//       // 수정할 데이터 정의
//       {
//         boardTitle,
//         boardContent,
//       },
//       //수정할 데이터는 boardId로 한번 더 조회하여 해당 boardId일 경우에만 수정을 진행합니다.
//       {
//         where: {
//           boardId,
//         },
//       }
//     );
//     return modifyData;
//   };

//   //삭제
//   deleteBoard = async (boardId) => {
//     const deletedData = await Boards.destroy({
//       where: {
//         boardId: boardId,
//       },
//     });

//     return deletedData;
//   };

//   getAuth = async (userId, boardId) => {
//     const auth = await Auths.findOne({
//       where: { authId: userId, boardId: boardId },
//     });
//     return auth;
//   };

//   //보드조회
//   getBoardAuth = async (boardId) => {
//     const board = await Boards.findAll({ where: { boardId } });
//     return board;
//   };
// }

// module.exports = postsRepository;
