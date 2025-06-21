/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/user_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The external provider name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/user_identity#external_provider UserIdentity#external_provider}
  */
  readonly externalProvider: string;
  /**
  * A specific external authentication provider UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/user_identity#external_uid UserIdentity#external_uid}
  */
  readonly externalUid: string;
  /**
  * The GitLab ID of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/user_identity#user_id UserIdentity#user_id}
  */
  readonly userId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/user_identity gitlab_user_identity}
*/
export class UserIdentity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_user_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserIdentity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserIdentity to import
  * @param importFromId The id of the existing UserIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/user_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_user_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/user_identity gitlab_user_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: UserIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_user_identity',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.1.1',
        providerVersionConstraint: '~> 18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalProvider = config.externalProvider;
    this._externalUid = config.externalUid;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_provider - computed: false, optional: false, required: true
  private _externalProvider?: string; 
  public get externalProvider() {
    return this.getStringAttribute('external_provider');
  }
  public set externalProvider(value: string) {
    this._externalProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalProviderInput() {
    return this._externalProvider;
  }

  // external_uid - computed: false, optional: false, required: true
  private _externalUid?: string; 
  public get externalUid() {
    return this.getStringAttribute('external_uid');
  }
  public set externalUid(value: string) {
    this._externalUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUidInput() {
    return this._externalUid;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_provider: cdktf.stringToTerraform(this._externalProvider),
      external_uid: cdktf.stringToTerraform(this._externalUid),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_provider: {
        value: cdktf.stringToHclTerraform(this._externalProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_uid: {
        value: cdktf.stringToHclTerraform(this._externalUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.numberToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
