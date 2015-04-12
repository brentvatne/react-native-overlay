#import "RNClickThroughWindow.h"
#import "RCTView.h"
#import "UIView+React.h"

@implementation RNClickThroughWindow

- (UIView *)hitTest:(CGPoint)point withEvent:(UIEvent *)event {
  UIView *rootView = [[[[self rootViewController] view] subviews] objectAtIndex:0];
  CGPoint hitPoint = [rootView convertPoint:point fromView:self];

  if ([rootView pointInside:hitPoint withEvent:event]) {
    return [super hitTest:point withEvent:event];
  } else {
    return nil;
  }
}

@end
