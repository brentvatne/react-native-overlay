Pod::Spec.new do |s|
  s.name         = "react-native-overlay"
  s.version      = "0.4.2"
  s.summary      = "An <Overlay /> component that brings content inside to the front of the view regardless of its current position in the component tree."

  s.homepage     = "https://github.com/brentvatne/react-native-overlay"

  s.license      = "MIT"
  s.platform     = :ios, "8.0"

  s.source       = { :git => "https://github.com/brentvatne/react-native-overlay" }

  s.source_files  = "*.{h,m}"

  s.dependency 'React'
end
