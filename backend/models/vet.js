import mongoose from "mongoose";

const vetSchema = new mongoose.Schema(
  {
    tutorName: {
      type: String,
      require: [true, "Por favor, insira o nome do tutor"],
      maxLength: [100, "O nome do tutor não pode ter mais de 100 caracteres"],
    },
    tutorEmail: {
      type: String,
      require: [true, "Por favor, insira o email do tutor"],
    },
    tutorPhone: {
      type: String,
      require: [true, "Por favor, insira o telefone do tutor"],
      maxLength: [15, "O telefone do tutor não pode ter mais de 15 caracteres"],
    },
    animalName: {
      type: String,
      require: [true, "Por favor, insira o nome do animal"],
      maxLength: [100, "O nome do animal não pode ter mais de 100 caracteres"],
    },
    species: {
      type: String,
      require: [true, "Por favor, insira a espécie do animal"],
      maxLength: [50, "A espécie do animal não pode ter mais de 50 caracteres"],
    },
    race: {
      type: String,
      maxLength: [50, "A raça do animal não pode ter mais de 50 caracteres"],
    },
    age: {
      type: Number,
      require: [true, "Por favor, insira a idade do animal"],
      min: [0, "A idade do animal não pode ser menor que 0"],
      max: [50, "A idade do animal não pode ser maior que 50"],
    },
    sex: {
      type: String,
      require: [true, "Por favor, insira o sexo do animal"],
      enum: {
        values: ["Macho", "Fêmea"],
        message: "Por favor, selecione o sexo do animal",
      },
    },
    dateConsult: {
      type: Date,
      require: [true, "Por favor, insira a data da consulta"],
    },
    hourConsult: {
      type: String,
      require: [true, "Por favor, insira a hora da consulta"],
    },
    reasonConsult: {
      type: String,
      require: [true, "Por favor, insira o motivo da consulta"],
      maxLength: [
        500,
        "O motivo da consulta não pode ter mais de 500 caracteres",
      ],
    },
    symptoms: {
      type: String,
      require: [true, "Por favor, insira os sintomas do animal"],
      maxLength: [
        500,
        "Os sintomas do animal não pode ter mais de 500 caracteres",
      ],
    },
    status: {
      type: String,
      require: [true, "Por favor, insira o status da consulta"],
      enum: {
        values: ["Agendada", "Cancelada", "Realizada"],
        message: "Por favor, selecione o status da consulta",
      },
    },
    observations: {
      type: String,
      maxLength: [500, "As observações não pode ter mais de 500 caracteres"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Vet", vetSchema);
