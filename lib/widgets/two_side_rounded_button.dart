import 'package:book_app/consttants.dart';
import 'package:flutter/material.dart';

// we have some magic number here
// you can explixit write it better i.e 8 + 16
class TwoSideRoundedButton extends StatelessWidget {
  final String text ;
  final double radious ;
  final GestureTapCallback? press ;
  const TwoSideRoundedButton({
    Key? key,
    required this.text,
    this.radious = 29, this.press,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: press,
      child: Container(
        alignment: Alignment.center,
        padding: const EdgeInsets.symmetric(vertical: 10),
        decoration: BoxDecoration(
          color: kBlackColor,
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(radious),
            bottomRight: Radius.circular(radious),
          ),
        ),
        child: Text(
          text,
          style: const TextStyle(color: Colors.white),
        ),
      ),
    );
  }
}
