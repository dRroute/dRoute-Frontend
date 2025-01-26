import 'package:flutter/material.dart';
import 'package:droute_frontend/utils/routes.dart';
import 'package:droute_frontend/styles/color/app_color.dart';

class ForgetPassword extends StatefulWidget {
  const ForgetPassword({super.key});

  @override
  State<ForgetPassword> createState() => _ForgetPasswordState();
}

class _ForgetPasswordState extends State<ForgetPassword> {
  final List<TextEditingController> _otpControllers = List.generate(6, (index) => TextEditingController());

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColor.deepOceanBlue, // Replace AppColor.deepOceanBlue with actual color
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.end,
          crossAxisAlignment: CrossAxisAlignment.end, // Align content to the start
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  "Logo Here",
                  style: TextStyle(fontSize: 30, color: Colors.white),
                )
              ],
            ),
            Container(
              margin: EdgeInsets.only(top: 50),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(20), // Round only the top-left corner
                  topRight: Radius.circular(20), // Round only the top-right corner
                ),
              ),
              padding: const EdgeInsets.all(16), // Add some padding
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start, // Align content within column
                children: [
                  Text(
                    "Forgot Password?",
                    style: const TextStyle(
                      fontFamily: 'TimesNewRoman', // Ensure this font is properly added to pubspec.yaml
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 16), // Add spacing
                  CustomText(text: "Email :"),
                  TextFormField(
                    decoration: InputDecoration(
                      hintText: "Enter Email Id ",
                    ),
                  ),
                  SizedBox(height: 10,),
                  InkWell(
                    onTap: (){
                      // Navigator.pushNamed(context, '/otp'); // Use named route for OTP page
                    },
                    child: Container(
                      margin: EdgeInsets.only(left: 20, right: 20),
                      width: double.infinity, // Ensures the container spans the full width
                      padding: EdgeInsets.symmetric(vertical: 8, horizontal: 20), // Adjust horizontal padding as needed
                      decoration: BoxDecoration(
                          color: AppColor.deepOceanBlue,
                          borderRadius: BorderRadius.circular(10)
                      ),
                      child: Text(
                        "Send OTP",
                        style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold), // Optional: Style the text
                        textAlign: TextAlign.center, // Center align the text
                      ),
                    ),
                  ),
                  CustomText(text: "OTP:"),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      // OTP Input Fields
                      Expanded(
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: List.generate(6, (index) {
                            return SizedBox(
                              width: 25, // Width of each OTP box
                              height: 25, // Height of each OTP box
                              child: TextField(
                                controller: _otpControllers[index],
                                keyboardType: TextInputType.number,
                                textAlign: TextAlign.center,
                                maxLength: 1,
                                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                                decoration: InputDecoration(
                                  border: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(5),
                                  ),
                                  counterText: "", // Hides character count
                                ),
                                onChanged: (value) {
                                  if (value.isNotEmpty && index < 5) {
                                    FocusScope.of(context).nextFocus();
                                  } else if (value.isEmpty && index > 0) {
                                    FocusScope.of(context).previousFocus();
                                  }
                                },
                              ),
                            );
                          }),
                        ),
                      ),
                      SizedBox(width: 10), // Spacing between OTP fields and Verify button
                      // Verify Button
                      InkWell(
                        onTap: () {
                          String otp = _otpControllers.map((e) => e.text).join();
                          print("Entered OTP: $otp"); // Example action
                          // Add verification logic here
                        },
                        child: Container(
                          padding: EdgeInsets.symmetric(vertical: 3, horizontal: 20),
                          decoration: BoxDecoration(
                            color: AppColor.deepOceanBlue, // Customize button color
                            borderRadius: BorderRadius.circular(5),
                          ),
                          child: Text(
                            "Verify",
                            style: TextStyle(color: Colors.white, fontSize: 16),
                          ),
                        ),
                      ),
                    ],
                  ),
                  SizedBox(height: 10,),
                  CustomText(text: "New Password:"),
                  TextFormField(
                    decoration: InputDecoration(
                      hintText: "Enter New Password",
                    ),
                  ),
                  SizedBox(height: 10,),
                  CustomText(text: "Confirm New Password:"),
                  TextFormField(
                    decoration: InputDecoration(
                      hintText: "Confirm New Password",
                    ),
                  ),
                  SizedBox(height: 10,),
                  InkWell(
                    onTap: (){
                      Navigator.pushNamed(context, '/signin'); // Use named route for OTP page
                    },
                    child: Container(
                      width: double.infinity, // Ensures the container spans the full width
                      padding: EdgeInsets.symmetric(vertical: 5, horizontal: 20), // Adjust horizontal padding as needed
                      decoration: BoxDecoration(
                          color: AppColor.deepOceanBlue,
                          borderRadius: BorderRadius.circular(10)
                      ),
                      child: Text(
                        "Submit",
                        style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold), // Optional: Style the text
                        textAlign: TextAlign.center, // Center align the text
                      ),
                    ),
                  ),
                  SizedBox(height: 10,),
                  InkWell(
                    onTap: (){},
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text("Don't Have an Account?", style: TextStyle(fontWeight: FontWeight.bold)),
                        Text("Sign Up", style: TextStyle(color: AppColor.deepOceanBlue, fontWeight: FontWeight.bold)),
                      ],
                    ),
                  ),
                ],
              ),
            )
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
