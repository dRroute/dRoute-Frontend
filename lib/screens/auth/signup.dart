import 'package:flutter/material.dart';
import 'package:droute_frontend/styles/color/app_color.dart';

class SignUpPage extends StatefulWidget {
  const SignUpPage({super.key});

  @override
  State<SignUpPage> createState() => _SignUpPageState();
}

class _SignUpPageState extends State<SignUpPage> {
  String? selectedValue = "User";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColor.deepOceanBlue,
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  "Logo Here",
                  style: TextStyle(fontSize: 30, color: Colors.white),
                ),
              ],
            ),
            Container(
              margin: const EdgeInsets.only(top: 50),
              decoration: const BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(20),
                  topRight: Radius.circular(20),
                ),
              ),
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    "Sign Up",
                    style: TextStyle(
                      fontFamily: 'TimesNewRoman',
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 16),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      Flexible(
                        child: RadioListTile<String>(
                          title: const Text("User"),
                          value: "User",
                          groupValue: selectedValue,
                          onChanged: (value) {
                            setState(() {
                              selectedValue = value;
                            });
                          },
                        ),
                      ),
                      Flexible(
                        child: RadioListTile<String>(
                          title: const Text("Driver"),
                          value: "Driver",
                          groupValue: selectedValue,
                          onChanged: (value) {
                            setState(() {
                              selectedValue = value;
                            });
                          },
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 16),
                  CustomText(text: "Email:"),
                  TextFormField(
                    decoration: const InputDecoration(
                      hintText: "Enter Email Id",
                    ),
                  ),
                  const SizedBox(height: 10),
                  CustomText(text: "Mobile Number:"),
                  TextFormField(
                    decoration: const InputDecoration(
                      hintText: "Enter Mobile Number",
                    ),
                  ),
                  const SizedBox(height: 10),
                  CustomText(text: "Password:"),
                  TextFormField(
                    decoration: const InputDecoration(
                      hintText: "Enter Password",
                    ),
                  ),
                  const SizedBox(height: 10),
                  CustomText(text: "Confirm Password:"),
                  TextFormField(
                    decoration: const InputDecoration(
                      hintText: "Enter Confirm Password",
                    ),
                  ),
                  const SizedBox(height: 10),
                  InkWell(
                    onTap: () {
                      Navigator.pushNamed(context, '/otp');
                    },
                    child: Container(
                      width: double.infinity,
                      padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 20),
                      decoration: BoxDecoration(
                        color: AppColor.deepOceanBlue,
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: const Text(
                        "Sign Up",
                        style: TextStyle(color: Colors.white),
                        textAlign: TextAlign.center,
                      ),
                    ),
                  ),
                  const SizedBox(height: 10),
                  InkWell(
                    onTap: () {
                      Navigator.pushNamed(context, '/signin');
                    },
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        const Text(
                          "Already Have an Account?",
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                        Text(
                          "Sign In",
                          style: TextStyle(
                            color: AppColor.deepOceanBlue,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

Widget CustomText({required String text}) {
  return Text(
    text,
    style: const TextStyle(
      fontWeight: FontWeight.bold,
      fontSize: 16,
    ),
  );
}
