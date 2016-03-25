#import "RNClickThroughWindow.h"
#import "RCTView.h"
#import "UIView+React.h"

@implementation RNClickThroughWindow

- (UIView *)hitTest:(CGPoint)point withEvent:(UIEvent *)event {
  NSArray *subviews = [[[self rootViewController] view] subviews];
    
  if ([subviews count] > 0) {
    UIView *rootView = [subviews objectAtIndex:0];
    CGPoint hitPoint = [rootView convertPoint:point fromView:self];
    
    if ([rootView pointInside:hitPoint withEvent:event]) {
        return [super hitTest:point withEvent:event];
    }      
  }
  
  return nil;
}
@end
