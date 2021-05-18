//
//  NearCell.swift
//  airbnbApp
//
//  Created by zombietux on 2021/05/17.
//

import UIKit

class NearCell: UICollectionViewCell {
    static let reuseIdentifier = "NearCell"
    
    let titleLabel = UILabel()
    let subtitleLabel = UILabel()
    let imageView = UIImageView()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configureUI()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configureUI()
    }
    
    private func configureUI() {
        let textStack = UIStackView(arrangedSubviews: [titleLabel, subtitleLabel])
        textStack.axis = .vertical
        
        imageView.contentMode = .scaleAspectFill
        imageView.layer.cornerRadius = 8
        imageView.layer.masksToBounds = true
        
        let horizontalStack = UIStackView(arrangedSubviews: [imageView, textStack])
        horizontalStack.axis = .horizontal
        horizontalStack.alignment = .center
        horizontalStack.spacing = 10
        
        contentView.addSubview(horizontalStack)
        horizontalStack.translatesAutoresizingMaskIntoConstraints = false
        
        let imageWidthConstraint = imageView.widthAnchor.constraint(equalToConstant: 80)
        imageWidthConstraint.priority = .defaultHigh + 1
        
        NSLayoutConstraint.activate([
            imageWidthConstraint,
            imageView.heightAnchor.constraint(equalTo: imageView.widthAnchor, multiplier: 1),
            horizontalStack.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 8),
            horizontalStack.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -8),
            horizontalStack.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -8),
            horizontalStack.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8)
        ])
    }
}
