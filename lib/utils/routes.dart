
import 'package:flutter/material.dart';
import 'package:droute_frontend/screens/auth/signup.dart';
import 'package:droute_frontend/screens/auth/signin.dart';
import 'package:droute_frontend/screens/auth/otp_page.dart';
import 'package:droute_frontend/screens/auth/forget_password.dart';

final Map<String, WidgetBuilder> appRoutes = {
  '/signup': (context) => const SignUpPage(),
  '/signin': (context) => const SignInPage(),
  '/otp': (context) => const OTPPage(),
  '/forget-password': (context) => const ForgetPassword(),
};
