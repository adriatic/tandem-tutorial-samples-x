import { db } from "../../lib/db";
export const posts = () => {
  return db.post.findMany();
};
export const post = ({
  id
}) => {
  return db.post.findUnique({
    where: {
      id
    }
  });
};
export const createPost = ({
  input
}) => {
  return db.post.create({
    data: input
  });
};
export const updatePost = ({
  id,
  input
}) => {
  return db.post.update({
    data: input,
    where: {
      id
    }
  });
};
export const deletePost = ({
  id
}) => {
  return db.post.delete({
    where: {
      id
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvc2VydmljZXMvcG9zdHMvcG9zdHMuanMiXSwibmFtZXMiOlsiZGIiLCJwb3N0cyIsInBvc3QiLCJmaW5kTWFueSIsImlkIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiY3JlYXRlUG9zdCIsImlucHV0IiwiY3JlYXRlIiwiZGF0YSIsInVwZGF0ZVBvc3QiLCJ1cGRhdGUiLCJkZWxldGVQb3N0IiwiZGVsZXRlIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxFQUFUO0FBRUEsT0FBTyxNQUFNQyxLQUFLLEdBQUcsTUFBTTtBQUN6QixTQUFPRCxFQUFFLENBQUNFLElBQUgsQ0FBUUMsUUFBUixFQUFQO0FBQ0QsQ0FGTTtBQUlQLE9BQU8sTUFBTUQsSUFBSSxHQUFHLENBQUM7QUFBRUUsRUFBQUE7QUFBRixDQUFELEtBQVk7QUFDOUIsU0FBT0osRUFBRSxDQUFDRSxJQUFILENBQVFHLFVBQVIsQ0FBbUI7QUFDeEJDLElBQUFBLEtBQUssRUFBRTtBQUFFRixNQUFBQTtBQUFGO0FBRGlCLEdBQW5CLENBQVA7QUFHRCxDQUpNO0FBTVAsT0FBTyxNQUFNRyxVQUFVLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBZTtBQUN2QyxTQUFPUixFQUFFLENBQUNFLElBQUgsQ0FBUU8sTUFBUixDQUFlO0FBQ3BCQyxJQUFBQSxJQUFJLEVBQUVGO0FBRGMsR0FBZixDQUFQO0FBR0QsQ0FKTTtBQU1QLE9BQU8sTUFBTUcsVUFBVSxHQUFHLENBQUM7QUFBRVAsRUFBQUEsRUFBRjtBQUFNSSxFQUFBQTtBQUFOLENBQUQsS0FBbUI7QUFDM0MsU0FBT1IsRUFBRSxDQUFDRSxJQUFILENBQVFVLE1BQVIsQ0FBZTtBQUNwQkYsSUFBQUEsSUFBSSxFQUFFRixLQURjO0FBRXBCRixJQUFBQSxLQUFLLEVBQUU7QUFBRUYsTUFBQUE7QUFBRjtBQUZhLEdBQWYsQ0FBUDtBQUlELENBTE07QUFPUCxPQUFPLE1BQU1TLFVBQVUsR0FBRyxDQUFDO0FBQUVULEVBQUFBO0FBQUYsQ0FBRCxLQUFZO0FBQ3BDLFNBQU9KLEVBQUUsQ0FBQ0UsSUFBSCxDQUFRWSxNQUFSLENBQWU7QUFDcEJSLElBQUFBLEtBQUssRUFBRTtBQUFFRixNQUFBQTtBQUFGO0FBRGEsR0FBZixDQUFQO0FBR0QsQ0FKTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiIH0gZnJvbSAnc3JjL2xpYi9kYidcblxuZXhwb3J0IGNvbnN0IHBvc3RzID0gKCkgPT4ge1xuICByZXR1cm4gZGIucG9zdC5maW5kTWFueSgpXG59XG5cbmV4cG9ydCBjb25zdCBwb3N0ID0gKHsgaWQgfSkgPT4ge1xuICByZXR1cm4gZGIucG9zdC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdCA9ICh7IGlucHV0IH0pID0+IHtcbiAgcmV0dXJuIGRiLnBvc3QuY3JlYXRlKHtcbiAgICBkYXRhOiBpbnB1dCxcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVBvc3QgPSAoeyBpZCwgaW5wdXQgfSkgPT4ge1xuICByZXR1cm4gZGIucG9zdC51cGRhdGUoe1xuICAgIGRhdGE6IGlucHV0LFxuICAgIHdoZXJlOiB7IGlkIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQb3N0ID0gKHsgaWQgfSkgPT4ge1xuICByZXR1cm4gZGIucG9zdC5kZWxldGUoe1xuICAgIHdoZXJlOiB7IGlkIH0sXG4gIH0pXG59XG4iXX0=