//
//  RoomSearchBar.swift
//  airbnbApp
//
//  Created by zombietux on 2021/05/17.
//

import UIKit

class RoomSearchBar: UISearchBar {
    private let placeholderText = "어디로 여행가세요?"
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configureUI()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configureUI()
    }
    
    private func configureUI() {
        placeholder = placeholderText
    }
}
