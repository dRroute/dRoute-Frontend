import 'package:flutter/material.dart';
import 'package:droute_frontend/styles/color/app_color.dart';

class SignInPage extends StatefulWidget {
  const SignInPage({super.key});

  @override
  State<SignInPage> createState() => _SignInPageState();
}

class _SignInPageState extends State<SignInPage> {
  String? selectedValue = "User";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColor.deepOceanBlue,
      body: SafeArea(
        child: Column(
          children: [
            // Logo section
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Center(
                  child: Image.asset(
                    'assets/images/droute_logo.png', // Path to your logo
                    width: 200, // Adjust size as needed
                    height: 200,
                  ),
                ),
              ],
            ),

            // The expanded form container which should be aligned at the bottom
            Expanded(
              child: Align(
                alignment: Alignment.bottomCenter,  // Align at the bottom
                child: SingleChildScrollView(
                  child: Container(
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
                          "Sign In",
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
                        CustomText(text: "Email or Mobile number"),
                        TextFormField(
                          decoration: const InputDecoration(
                            hintText: "Enter Email Id or Mobile number",
                          ),
                        ),
                        const SizedBox(height: 10),
                        CustomText(text: "Password"),
                        TextFormField(
                          decoration: const InputDecoration(
                            hintText: "Enter Password",
                          ),
                        ),
                        const SizedBox(height: 10),
                        InkWell(
                          onTap: () {
                            Navigator.pushNamed(context, '/forget-password');
                          },
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.end,
                            children: [
                              const Text(
                                "Forgot Password?",
                                style: TextStyle(
                                  fontWeight: FontWeight.bold,
                                  color: Colors.red,
                                ),
                              ),
                              const Text(
                                "Click here",
                                style: TextStyle(
                                  color: AppColor.deepOceanBlue,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                            ],
                          ),
                        ),
                        const SizedBox(height: 10),
                        InkWell(
                          onTap: () {
                            Navigator.pushNamed(context, '/signin');
                          },
                          child: Container(
                            width: double.infinity,
                            padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 20),
                            decoration: BoxDecoration(
                              color: AppColor.deepOceanBlue,
                              borderRadius: BorderRadius.circular(10),
                            ),
                            child: const Text(
                              "Sign In",
                              style: TextStyle(color: Colors.white),
                              textAlign: TextAlign.center,
                            ),
                          ),
                        ),
                        const SizedBox(height: 10),
                        InkWell(
                          onTap: () {
                            Navigator.pushNamed(context, '/signup');
                          },
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              const Text(
                                "Don't Have an Account?",
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              Text(
                                "Sign Up",
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
                ),
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
