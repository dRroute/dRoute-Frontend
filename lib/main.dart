import 'package:flutter/material.dart';
import 'package:droute_frontend/utils/routes.dart'; // Import routes file
import 'package:flutter/services.dart';
import 'package:droute_frontend/screens/home.dart'; // Import HomePage
import 'package:droute_frontend/screens/auth/signup.dart'; // Import SignupPage

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'dRoute App',
      debugShowCheckedModeBanner: false,
      home: SplashScreen(), // Set SplashScreen as the initial screen
      routes: appRoutes, // Define app routes
    );
  }
}

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    // Navigate to SignupPage after 1 second
    Future.delayed(const Duration(seconds: 3), () {
      Navigator.pushReplacementNamed(context, '/signup'); // Navigate to Signup
    });
  }

  @override
  Widget build(BuildContext context) {
    return HomePage(); // Show the HomePage as the splash screen
  }
}
