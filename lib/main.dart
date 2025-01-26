import 'package:flutter/material.dart';
import 'package:droute_frontend/utils/routes.dart'; // Import routes file
import 'package:flutter/services.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {

  // Function to print the assets in the app
  Future<void> printAssets() async {
    final assets = await rootBundle.loadString('assets/AssetManifest.json');
    print(assets);
  }

  @override
  void initState() {
    super.initState();
    printAssets();  // Call it to verify available assets.
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'DRoute App',
      initialRoute: '/signup',
      routes: appRoutes,
    );
  }
}
