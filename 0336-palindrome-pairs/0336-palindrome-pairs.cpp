#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    vector<vector<int>> palindromePairs(vector<string>& words) {
        unordered_map<string, int> dict;
        vector<vector<int>> ans;
        for (int i = 0; i < words.size(); i++) {
            string key = words[i];
            reverse(key.begin(), key.end());
            dict[key] = i;
        }
        if (dict.find("") != dict.end()) {
            for (int i = 0; i < words.size(); i++) {
                if (i == dict[""]) continue;
                if (isPalindrome(words[i])) {
                    ans.push_back({dict[""], i});
                }
            }
        }
        for (int i = 0; i < words.size(); i++) {
            for (int j = 0; j < words[i].size(); j++) {
                string left = words[i].substr(0, j);
                string right = words[i].substr(j, words[i].size() - j);
                if (dict.find(left) != dict.end() && isPalindrome(right) && dict[left] != i) {
                    ans.push_back({i, dict[left]});
                }
                if (dict.find(right) != dict.end() && isPalindrome(left) && dict[right] != i) {
                    ans.push_back({dict[right], i});
                }
            }
        }
        return ans;
    }

    bool isPalindrome(string s) {
        int i = 0, j = s.size() - 1;
        while (i < j) {
            if (s[i++] != s[j--]) return false;
        }
        return true;
    }
};