# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - region "Notifications Alt+T"
  - alert [ref=e2]
  - generic [ref=e4]:
    - generic [ref=e6]:
      - button "Back" [ref=e7] [cursor=pointer]:
        - img "arrow-left" [ref=e8]
      - img "logo" [ref=e9]
    - generic [ref=e12]:
      - generic [ref=e13]:
        - heading "What is your current weight?" [level=1] [ref=e15]
        - generic [ref=e16]:
          - generic [ref=e17]:
            - button "kg" [ref=e18]
            - button "lbs" [ref=e19] [cursor=pointer]
          - generic [ref=e20]:
            - generic: kg
            - textbox [ref=e21]
      - button "Continue" [disabled] [ref=e24]
```