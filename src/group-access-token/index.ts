/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/group_access_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupAccessTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access level for the group access token. Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`. Default is `maintainer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/group_access_token#access_level GroupAccessToken#access_level}
  */
  readonly accessLevel?: string;
  /**
  * When the token will expire, YYYY-MM-DD format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/group_access_token#expires_at GroupAccessToken#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * The ID or full path of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/group_access_token#group GroupAccessToken#group}
  */
  readonly group: string;
  /**
  * The name of the group access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/group_access_token#name GroupAccessToken#name}
  */
  readonly name: string;
  /**
  * The configuration for when to rotate a token automatically. Will not rotate a token until `terraform apply` is run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/group_access_token#rotation_configuration GroupAccessToken#rotation_configuration}
  */
  readonly rotationConfiguration?: GroupAccessTokenRotationConfiguration;
  /**
  * The scopes of the group access token. Valid values are: `api`, `read_api`, `read_registry`, `write_registry`, `read_repository`, `write_repository`, `create_runner`, `manage_runner`, `ai_features`, `k8s_proxy`, `read_observability`, `write_observability`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/group_access_token#scopes GroupAccessToken#scopes}
  */
  readonly scopes: string[];
}
export interface GroupAccessTokenRotationConfiguration {
  /**
  * The duration (in days) the new token should be valid for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/group_access_token#expiration_days GroupAccessToken#expiration_days}
  */
  readonly expirationDays: number;
  /**
  * The duration (in days) before the expiration when the token should be rotated. As an example, if set to 7 days, the token will rotate 7 days before the expiration date, but only when `terraform apply` is run in that timeframe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/group_access_token#rotate_before_days GroupAccessToken#rotate_before_days}
  */
  readonly rotateBeforeDays: number;
}

export function groupAccessTokenRotationConfigurationToTerraform(struct?: GroupAccessTokenRotationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_days: cdktf.numberToTerraform(struct!.expirationDays),
    rotate_before_days: cdktf.numberToTerraform(struct!.rotateBeforeDays),
  }
}


export function groupAccessTokenRotationConfigurationToHclTerraform(struct?: GroupAccessTokenRotationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_days: {
      value: cdktf.numberToHclTerraform(struct!.expirationDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rotate_before_days: {
      value: cdktf.numberToHclTerraform(struct!.rotateBeforeDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupAccessTokenRotationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupAccessTokenRotationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationDays = this._expirationDays;
    }
    if (this._rotateBeforeDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotateBeforeDays = this._rotateBeforeDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupAccessTokenRotationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expirationDays = undefined;
      this._rotateBeforeDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expirationDays = value.expirationDays;
      this._rotateBeforeDays = value.rotateBeforeDays;
    }
  }

  // expiration_days - computed: false, optional: false, required: true
  private _expirationDays?: number; 
  public get expirationDays() {
    return this.getNumberAttribute('expiration_days');
  }
  public set expirationDays(value: number) {
    this._expirationDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDaysInput() {
    return this._expirationDays;
  }

  // rotate_before_days - computed: false, optional: false, required: true
  private _rotateBeforeDays?: number; 
  public get rotateBeforeDays() {
    return this.getNumberAttribute('rotate_before_days');
  }
  public set rotateBeforeDays(value: number) {
    this._rotateBeforeDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateBeforeDaysInput() {
    return this._rotateBeforeDays;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/group_access_token gitlab_group_access_token}
*/
export class GroupAccessToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_access_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupAccessToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupAccessToken to import
  * @param importFromId The id of the existing GroupAccessToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/group_access_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupAccessToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_group_access_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/group_access_token gitlab_group_access_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupAccessTokenConfig
  */
  public constructor(scope: Construct, id: string, config: GroupAccessTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group_access_token',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.7.1',
        providerVersionConstraint: '~> 17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLevel = config.accessLevel;
    this._expiresAt = config.expiresAt;
    this._group = config.group;
    this._name = config.name;
    this._rotationConfiguration.internalValue = config.rotationConfiguration;
    this._scopes = config.scopes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: true, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // expires_at - computed: true, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // revoked - computed: true, optional: false, required: false
  public get revoked() {
    return this.getBooleanAttribute('revoked');
  }

  // rotation_configuration - computed: false, optional: true, required: false
  private _rotationConfiguration = new GroupAccessTokenRotationConfigurationOutputReference(this, "rotation_configuration");
  public get rotationConfiguration() {
    return this._rotationConfiguration;
  }
  public putRotationConfiguration(value: GroupAccessTokenRotationConfiguration) {
    this._rotationConfiguration.internalValue = value;
  }
  public resetRotationConfiguration() {
    this._rotationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationConfigurationInput() {
    return this._rotationConfiguration.internalValue;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level: cdktf.stringToTerraform(this._accessLevel),
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      group: cdktf.stringToTerraform(this._group),
      name: cdktf.stringToTerraform(this._name),
      rotation_configuration: groupAccessTokenRotationConfigurationToTerraform(this._rotationConfiguration.internalValue),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expires_at: {
        value: cdktf.stringToHclTerraform(this._expiresAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_configuration: {
        value: groupAccessTokenRotationConfigurationToHclTerraform(this._rotationConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupAccessTokenRotationConfiguration",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
