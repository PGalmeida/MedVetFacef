import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import User from "../models/user.js";
import ErrorHandler from "../utils/errorHandle.js";

export const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  console.log("Register request received:", { name, email });

  if (!name || !email || !password) {
    return next(new ErrorHandler("Por favor, preencha todos os campos", 400));
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  const token = user.getJwtToken();

  console.log("User registered successfully:", user.email);

  res.status(201).json({
    success: true,
    token,
  });
});

export const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  console.log("Login request received:", { email });

  if (!email || !password) {
    return next(new ErrorHandler("Por favor, insira email e senha", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    console.log("User not found:", email);
    return next(new ErrorHandler("Email ou senha incorretos", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    console.log("Password mismatch for user:", email);
    return next(new ErrorHandler("Email ou senha incorretos", 401));
  }

  const token = user.getJwtToken();

  console.log("Login successful for user:", email);

  res.status(200).json({
    success: true,
    token,
  });
});
