import 'package:flutter/material.dart';
import 'package:droute_frontend/screens/auth/signin.dart';
import 'package:droute_frontend/styles/color/app_color.dart';

class OTPPage extends StatefulWidget {
  const OTPPage({super.key});

  @override
  State<OTPPage> createState() => _OTPPageState();
}

class _OTPPageState extends State<OTPPage> {
  final List<TextEditingController> _emailOtpControllers =
  List.generate(6, (index) => TextEditingController());
  final List<TextEditingController> _mobileOtpControllers =
  List.generate(6, (index) => TextEditingController());

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColor.deepOceanBlue,
      body: SafeArea(
        child: Column(
          children: [
            // Top logo
            Expanded(
              flex: 2,
              child: Center(
                child: Image.asset(
                  'assets/images/droute_logo.png',
                  width: 200,
                  height: 200,
                ),
              ),
            ),

            // Bottom white box
            Container(
              decoration: const BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(20),
                  topRight: Radius.circular(20),
                ),
              ),
              padding: const EdgeInsets.all(16),
              child: Column(
                mainAxisSize: MainAxisSize.min, // Prevent stretching
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text(
                        "Enter OTP:",
                        style: TextStyle(
                          fontFamily: 'TimesNewRoman',
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 16),
                      const CustomText(text: "Email OTP:"),
                      const SizedBox(height: 10),
                      _buildEmailOtpRow(),
                      const SizedBox(height: 16),
                      const CustomText(text: "Mobile OTP:"),
                      const SizedBox(height: 10),
                      _buildMobileOtpRow(),
                      const SizedBox(height: 20),
                      InkWell(
                        onTap: () {
                          String otp =
                          _emailOtpControllers.map((e) => e.text).join();
                          print("Entered OTP: $otp");
                          // Navigator.pushReplacementNamed(context, '/signin');
                        },
                        child: Container(
                          width: double.infinity,
                          padding: const EdgeInsets.symmetric(vertical: 10),
                          decoration: BoxDecoration(
                            color: AppColor.deepOceanBlue,
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: const Text(
                            "Verify OTP",
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 16,
                            ),
                            textAlign: TextAlign.center,
                          ),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 10),
                  InkWell(
                    onTap: () {
                      Navigator.pushReplacementNamed(context, '/signup');
                    },
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        const Text(
                          "Don't have an account?",
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                        Text(
                          " Sign Up",
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

  Widget _buildEmailOtpRow() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: List.generate(6, (index) {
        return SizedBox(
          width: 40,
          height: 40,

          child: TextField(
            controller: _emailOtpControllers[index], // Use email OTP controllers
            keyboardType: TextInputType.number,
            textAlign: TextAlign.center,
            maxLength: 1,
            style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            decoration: InputDecoration(
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(5),
              ),
              counterText: "",
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
    );
  }

  Widget _buildMobileOtpRow() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: List.generate(6, (index) {
        return SizedBox(
          width: 40,
          height: 40,
          child: TextField(
            controller: _emailOtpControllers[index], // Use email OTP controllers
            keyboardType: TextInputType.number,
            textAlign: TextAlign.center,
            maxLength: 1,
            style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            decoration: InputDecoration(
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(5),
              ),
              counterText: "",
              contentPadding: EdgeInsets.symmetric(vertical: 12), // Adjust this padding
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
    );
  }
}

class CustomText extends StatelessWidget {
  final String text;

  const CustomText({required this.text});

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: const TextStyle(
        fontWeight: FontWeight.bold,
        fontSize: 16,
      ),
    );
  }
}
