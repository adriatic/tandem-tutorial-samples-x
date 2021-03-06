var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var users_exports = {};
__export(users_exports, {
  createUser: () => createUser,
  deleteUser: () => deleteUser,
  updateUser: () => updateUser,
  user: () => user,
  users: () => users
});
module.exports = __toCommonJS(users_exports);
var import_db = require("../../lib/db");
const users = () => {
  return import_db.db.user.findMany();
};
const user = ({
  id
}) => {
  return import_db.db.user.findUnique({
    where: {
      id
    }
  });
};
const createUser = ({
  input
}) => {
  return import_db.db.user.create({
    data: input
  });
};
const updateUser = ({
  id,
  input
}) => {
  return import_db.db.user.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteUser = ({
  id
}) => {
  return import_db.db.user.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createUser,
  deleteUser,
  updateUser,
  user,
  users
});
//# sourceMappingURL=users.js.map
