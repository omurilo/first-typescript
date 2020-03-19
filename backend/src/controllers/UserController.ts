import { Request, Response } from "express";

import EmailService from "../services/EmailService";

const users = [{ name: "Murilo Henrique", email: "oofleaoo@gmail.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  async create(req: Request, res: Response) {
    const Mail = new EmailService();

    Mail.sendMail({
      to: {
        name: "Murilo Henrique",
        email: "oofleaoo@gmail.com"
      },
      message: {
        subject: "Bem vindo ao sistema",
        body: "Seja bem vindo ao sistema!"
      }
    });

    return res.send("Sucesso!");
  }
};
