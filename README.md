# budget-tracker
Unit 19 PWA Homework: Online/Offline Budget Trackers

GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.

The transaction history should be replayed in order
The history should be kept in either IndexDB or browser cache
If the server is up, then the current transactions should still be sent to the server without being added to the failure cache
The initial list of cache_files