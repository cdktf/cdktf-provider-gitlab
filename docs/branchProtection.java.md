# `branchProtection` Submodule <a name="`branchProtection` Submodule" id="@cdktf/provider-gitlab.branchProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BranchProtection <a name="BranchProtection" id="@cdktf/provider-gitlab.branchProtection.BranchProtection"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection gitlab_branch_protection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.branch_protection.BranchProtection;

BranchProtection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .branch(java.lang.String)
    .project(java.lang.String)
//  .allowedToMerge(IResolvable)
//  .allowedToMerge(java.util.List<BranchProtectionAllowedToMerge>)
//  .allowedToPush(IResolvable)
//  .allowedToPush(java.util.List<BranchProtectionAllowedToPush>)
//  .allowedToUnprotect(IResolvable)
//  .allowedToUnprotect(java.util.List<BranchProtectionAllowedToUnprotect>)
//  .allowForcePush(java.lang.Boolean)
//  .allowForcePush(IResolvable)
//  .codeOwnerApprovalRequired(java.lang.Boolean)
//  .codeOwnerApprovalRequired(IResolvable)
//  .mergeAccessLevel(java.lang.String)
//  .pushAccessLevel(java.lang.String)
//  .unprotectAccessLevel(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.branch">branch</a></code> | <code>java.lang.String</code> | Name of the branch. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The id of the project. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.allowedToMerge">allowedToMerge</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>></code> | allowed_to_merge block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.allowedToPush">allowedToPush</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>></code> | allowed_to_push block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.allowedToUnprotect">allowedToUnprotect</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>></code> | allowed_to_unprotect block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.allowForcePush">allowForcePush</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Can be set to true to allow users with push access to force push. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.codeOwnerApprovalRequired">codeOwnerApprovalRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Can be set to true to require code owner approval before merging. Only available for Premium and Ultimate instances. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.mergeAccessLevel">mergeAccessLevel</a></code> | <code>java.lang.String</code> | Access levels allowed to merge. Valid values are: `no one`, `developer`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.pushAccessLevel">pushAccessLevel</a></code> | <code>java.lang.String</code> | Access levels allowed to push. Valid values are: `no one`, `developer`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.unprotectAccessLevel">unprotectAccessLevel</a></code> | <code>java.lang.String</code> | Access levels allowed to unprotect. Valid values are: `developer`, `maintainer`, `admin`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.branch"></a>

- *Type:* java.lang.String

Name of the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#branch BranchProtection#branch}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#project BranchProtection#project}

---

##### `allowedToMerge`<sup>Optional</sup> <a name="allowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.allowedToMerge"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>>

allowed_to_merge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#allowed_to_merge BranchProtection#allowed_to_merge}

---

##### `allowedToPush`<sup>Optional</sup> <a name="allowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.allowedToPush"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>>

allowed_to_push block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#allowed_to_push BranchProtection#allowed_to_push}

---

##### `allowedToUnprotect`<sup>Optional</sup> <a name="allowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.allowedToUnprotect"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>>

allowed_to_unprotect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#allowed_to_unprotect BranchProtection#allowed_to_unprotect}

---

##### `allowForcePush`<sup>Optional</sup> <a name="allowForcePush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.allowForcePush"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Can be set to true to allow users with push access to force push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#allow_force_push BranchProtection#allow_force_push}

---

##### `codeOwnerApprovalRequired`<sup>Optional</sup> <a name="codeOwnerApprovalRequired" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.codeOwnerApprovalRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Can be set to true to require code owner approval before merging. Only available for Premium and Ultimate instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#code_owner_approval_required BranchProtection#code_owner_approval_required}

---

##### `mergeAccessLevel`<sup>Optional</sup> <a name="mergeAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.mergeAccessLevel"></a>

- *Type:* java.lang.String

Access levels allowed to merge. Valid values are: `no one`, `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#merge_access_level BranchProtection#merge_access_level}

---

##### `pushAccessLevel`<sup>Optional</sup> <a name="pushAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.pushAccessLevel"></a>

- *Type:* java.lang.String

Access levels allowed to push. Valid values are: `no one`, `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#push_access_level BranchProtection#push_access_level}

---

##### `unprotectAccessLevel`<sup>Optional</sup> <a name="unprotectAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.unprotectAccessLevel"></a>

- *Type:* java.lang.String

Access levels allowed to unprotect. Valid values are: `developer`, `maintainer`, `admin`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#unprotect_access_level BranchProtection#unprotect_access_level}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToMerge">putAllowedToMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToPush">putAllowedToPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToUnprotect">putAllowedToUnprotect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToMerge">resetAllowedToMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToPush">resetAllowedToPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToUnprotect">resetAllowedToUnprotect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowForcePush">resetAllowForcePush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetCodeOwnerApprovalRequired">resetCodeOwnerApprovalRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetMergeAccessLevel">resetMergeAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetPushAccessLevel">resetPushAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetUnprotectAccessLevel">resetUnprotectAccessLevel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllowedToMerge` <a name="putAllowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToMerge"></a>

```java
public void putAllowedToMerge(IResolvable OR java.util.List<BranchProtectionAllowedToMerge> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToMerge.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>>

---

##### `putAllowedToPush` <a name="putAllowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToPush"></a>

```java
public void putAllowedToPush(IResolvable OR java.util.List<BranchProtectionAllowedToPush> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToPush.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>>

---

##### `putAllowedToUnprotect` <a name="putAllowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToUnprotect"></a>

```java
public void putAllowedToUnprotect(IResolvable OR java.util.List<BranchProtectionAllowedToUnprotect> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToUnprotect.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>>

---

##### `resetAllowedToMerge` <a name="resetAllowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToMerge"></a>

```java
public void resetAllowedToMerge()
```

##### `resetAllowedToPush` <a name="resetAllowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToPush"></a>

```java
public void resetAllowedToPush()
```

##### `resetAllowedToUnprotect` <a name="resetAllowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToUnprotect"></a>

```java
public void resetAllowedToUnprotect()
```

##### `resetAllowForcePush` <a name="resetAllowForcePush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowForcePush"></a>

```java
public void resetAllowForcePush()
```

##### `resetCodeOwnerApprovalRequired` <a name="resetCodeOwnerApprovalRequired" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetCodeOwnerApprovalRequired"></a>

```java
public void resetCodeOwnerApprovalRequired()
```

##### `resetMergeAccessLevel` <a name="resetMergeAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetMergeAccessLevel"></a>

```java
public void resetMergeAccessLevel()
```

##### `resetPushAccessLevel` <a name="resetPushAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetPushAccessLevel"></a>

```java
public void resetPushAccessLevel()
```

##### `resetUnprotectAccessLevel` <a name="resetUnprotectAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetUnprotectAccessLevel"></a>

```java
public void resetUnprotectAccessLevel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BranchProtection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.branch_protection.BranchProtection;

BranchProtection.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.branch_protection.BranchProtection;

BranchProtection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.branch_protection.BranchProtection;

BranchProtection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.branch_protection.BranchProtection;

BranchProtection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BranchProtection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BranchProtection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BranchProtection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BranchProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BranchProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToMerge">allowedToMerge</a></code> | <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList">BranchProtectionAllowedToMergeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToPush">allowedToPush</a></code> | <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList">BranchProtectionAllowedToPushList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToUnprotect">allowedToUnprotect</a></code> | <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList">BranchProtectionAllowedToUnprotectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branchProtectionId">branchProtectionId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToMergeInput">allowedToMergeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToPushInput">allowedToPushInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToUnprotectInput">allowedToUnprotectInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowForcePushInput">allowForcePushInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.codeOwnerApprovalRequiredInput">codeOwnerApprovalRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.mergeAccessLevelInput">mergeAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.pushAccessLevelInput">pushAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.unprotectAccessLevelInput">unprotectAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowForcePush">allowForcePush</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.codeOwnerApprovalRequired">codeOwnerApprovalRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.mergeAccessLevel">mergeAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.pushAccessLevel">pushAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.unprotectAccessLevel">unprotectAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedToMerge`<sup>Required</sup> <a name="allowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToMerge"></a>

```java
public BranchProtectionAllowedToMergeList getAllowedToMerge();
```

- *Type:* <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList">BranchProtectionAllowedToMergeList</a>

---

##### `allowedToPush`<sup>Required</sup> <a name="allowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToPush"></a>

```java
public BranchProtectionAllowedToPushList getAllowedToPush();
```

- *Type:* <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList">BranchProtectionAllowedToPushList</a>

---

##### `allowedToUnprotect`<sup>Required</sup> <a name="allowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToUnprotect"></a>

```java
public BranchProtectionAllowedToUnprotectList getAllowedToUnprotect();
```

- *Type:* <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList">BranchProtectionAllowedToUnprotectList</a>

---

##### `branchProtectionId`<sup>Required</sup> <a name="branchProtectionId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branchProtectionId"></a>

```java
public java.lang.Number getBranchProtectionId();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `allowedToMergeInput`<sup>Optional</sup> <a name="allowedToMergeInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToMergeInput"></a>

```java
public java.lang.Object getAllowedToMergeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>>

---

##### `allowedToPushInput`<sup>Optional</sup> <a name="allowedToPushInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToPushInput"></a>

```java
public java.lang.Object getAllowedToPushInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>>

---

##### `allowedToUnprotectInput`<sup>Optional</sup> <a name="allowedToUnprotectInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToUnprotectInput"></a>

```java
public java.lang.Object getAllowedToUnprotectInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>>

---

##### `allowForcePushInput`<sup>Optional</sup> <a name="allowForcePushInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowForcePushInput"></a>

```java
public java.lang.Object getAllowForcePushInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `codeOwnerApprovalRequiredInput`<sup>Optional</sup> <a name="codeOwnerApprovalRequiredInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.codeOwnerApprovalRequiredInput"></a>

```java
public java.lang.Object getCodeOwnerApprovalRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mergeAccessLevelInput`<sup>Optional</sup> <a name="mergeAccessLevelInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.mergeAccessLevelInput"></a>

```java
public java.lang.String getMergeAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pushAccessLevelInput`<sup>Optional</sup> <a name="pushAccessLevelInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.pushAccessLevelInput"></a>

```java
public java.lang.String getPushAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `unprotectAccessLevelInput`<sup>Optional</sup> <a name="unprotectAccessLevelInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.unprotectAccessLevelInput"></a>

```java
public java.lang.String getUnprotectAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `allowForcePush`<sup>Required</sup> <a name="allowForcePush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowForcePush"></a>

```java
public java.lang.Object getAllowForcePush();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `codeOwnerApprovalRequired`<sup>Required</sup> <a name="codeOwnerApprovalRequired" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.codeOwnerApprovalRequired"></a>

```java
public java.lang.Object getCodeOwnerApprovalRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mergeAccessLevel`<sup>Required</sup> <a name="mergeAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.mergeAccessLevel"></a>

```java
public java.lang.String getMergeAccessLevel();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `pushAccessLevel`<sup>Required</sup> <a name="pushAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.pushAccessLevel"></a>

```java
public java.lang.String getPushAccessLevel();
```

- *Type:* java.lang.String

---

##### `unprotectAccessLevel`<sup>Required</sup> <a name="unprotectAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.unprotectAccessLevel"></a>

```java
public java.lang.String getUnprotectAccessLevel();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BranchProtectionAllowedToMerge <a name="BranchProtectionAllowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.branch_protection.BranchProtectionAllowedToMerge;

BranchProtectionAllowedToMerge.builder()
//  .groupId(java.lang.Number)
//  .userId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.property.userId">userId</a></code> | <code>java.lang.Number</code> | The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`. |

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#group_id BranchProtection#group_id}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#user_id BranchProtection#user_id}

---

### BranchProtectionAllowedToPush <a name="BranchProtectionAllowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.branch_protection.BranchProtectionAllowedToPush;

BranchProtectionAllowedToPush.builder()
//  .groupId(java.lang.Number)
//  .userId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.userId">userId</a></code> | <code>java.lang.Number</code> | The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`. |

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#group_id BranchProtection#group_id}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#user_id BranchProtection#user_id}

---

### BranchProtectionAllowedToUnprotect <a name="BranchProtectionAllowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.branch_protection.BranchProtectionAllowedToUnprotect;

BranchProtectionAllowedToUnprotect.builder()
//  .groupId(java.lang.Number)
//  .userId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.property.userId">userId</a></code> | <code>java.lang.Number</code> | The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`. |

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#group_id BranchProtection#group_id}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#user_id BranchProtection#user_id}

---

### BranchProtectionConfig <a name="BranchProtectionConfig" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.branch_protection.BranchProtectionConfig;

BranchProtectionConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .branch(java.lang.String)
    .project(java.lang.String)
//  .allowedToMerge(IResolvable)
//  .allowedToMerge(java.util.List<BranchProtectionAllowedToMerge>)
//  .allowedToPush(IResolvable)
//  .allowedToPush(java.util.List<BranchProtectionAllowedToPush>)
//  .allowedToUnprotect(IResolvable)
//  .allowedToUnprotect(java.util.List<BranchProtectionAllowedToUnprotect>)
//  .allowForcePush(java.lang.Boolean)
//  .allowForcePush(IResolvable)
//  .codeOwnerApprovalRequired(java.lang.Boolean)
//  .codeOwnerApprovalRequired(IResolvable)
//  .mergeAccessLevel(java.lang.String)
//  .pushAccessLevel(java.lang.String)
//  .unprotectAccessLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.branch">branch</a></code> | <code>java.lang.String</code> | Name of the branch. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.project">project</a></code> | <code>java.lang.String</code> | The id of the project. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToMerge">allowedToMerge</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>></code> | allowed_to_merge block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToPush">allowedToPush</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>></code> | allowed_to_push block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToUnprotect">allowedToUnprotect</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>></code> | allowed_to_unprotect block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowForcePush">allowForcePush</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Can be set to true to allow users with push access to force push. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.codeOwnerApprovalRequired">codeOwnerApprovalRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Can be set to true to require code owner approval before merging. Only available for Premium and Ultimate instances. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.mergeAccessLevel">mergeAccessLevel</a></code> | <code>java.lang.String</code> | Access levels allowed to merge. Valid values are: `no one`, `developer`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.pushAccessLevel">pushAccessLevel</a></code> | <code>java.lang.String</code> | Access levels allowed to push. Valid values are: `no one`, `developer`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.unprotectAccessLevel">unprotectAccessLevel</a></code> | <code>java.lang.String</code> | Access levels allowed to unprotect. Valid values are: `developer`, `maintainer`, `admin`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

Name of the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#branch BranchProtection#branch}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#project BranchProtection#project}

---

##### `allowedToMerge`<sup>Optional</sup> <a name="allowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToMerge"></a>

```java
public java.lang.Object getAllowedToMerge();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>>

allowed_to_merge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#allowed_to_merge BranchProtection#allowed_to_merge}

---

##### `allowedToPush`<sup>Optional</sup> <a name="allowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToPush"></a>

```java
public java.lang.Object getAllowedToPush();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>>

allowed_to_push block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#allowed_to_push BranchProtection#allowed_to_push}

---

##### `allowedToUnprotect`<sup>Optional</sup> <a name="allowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToUnprotect"></a>

```java
public java.lang.Object getAllowedToUnprotect();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>>

allowed_to_unprotect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#allowed_to_unprotect BranchProtection#allowed_to_unprotect}

---

##### `allowForcePush`<sup>Optional</sup> <a name="allowForcePush" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowForcePush"></a>

```java
public java.lang.Object getAllowForcePush();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Can be set to true to allow users with push access to force push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#allow_force_push BranchProtection#allow_force_push}

---

##### `codeOwnerApprovalRequired`<sup>Optional</sup> <a name="codeOwnerApprovalRequired" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.codeOwnerApprovalRequired"></a>

```java
public java.lang.Object getCodeOwnerApprovalRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Can be set to true to require code owner approval before merging. Only available for Premium and Ultimate instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#code_owner_approval_required BranchProtection#code_owner_approval_required}

---

##### `mergeAccessLevel`<sup>Optional</sup> <a name="mergeAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.mergeAccessLevel"></a>

```java
public java.lang.String getMergeAccessLevel();
```

- *Type:* java.lang.String

Access levels allowed to merge. Valid values are: `no one`, `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#merge_access_level BranchProtection#merge_access_level}

---

##### `pushAccessLevel`<sup>Optional</sup> <a name="pushAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.pushAccessLevel"></a>

```java
public java.lang.String getPushAccessLevel();
```

- *Type:* java.lang.String

Access levels allowed to push. Valid values are: `no one`, `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#push_access_level BranchProtection#push_access_level}

---

##### `unprotectAccessLevel`<sup>Optional</sup> <a name="unprotectAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.unprotectAccessLevel"></a>

```java
public java.lang.String getUnprotectAccessLevel();
```

- *Type:* java.lang.String

Access levels allowed to unprotect. Valid values are: `developer`, `maintainer`, `admin`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#unprotect_access_level BranchProtection#unprotect_access_level}

---

## Classes <a name="Classes" id="Classes"></a>

### BranchProtectionAllowedToMergeList <a name="BranchProtectionAllowedToMergeList" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.branch_protection.BranchProtectionAllowedToMergeList;

new BranchProtectionAllowedToMergeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.get"></a>

```java
public BranchProtectionAllowedToMergeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>>

---


### BranchProtectionAllowedToMergeOutputReference <a name="BranchProtectionAllowedToMergeOutputReference" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.branch_protection.BranchProtectionAllowedToMergeOutputReference;

new BranchProtectionAllowedToMergeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resetUserId"></a>

```java
public void resetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.accessLevelDescription">accessLevelDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.userIdInput">userIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.userId">userId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `accessLevelDescription`<sup>Required</sup> <a name="accessLevelDescription" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.accessLevelDescription"></a>

```java
public java.lang.String getAccessLevelDescription();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.groupIdInput"></a>

```java
public java.lang.Number getGroupIdInput();
```

- *Type:* java.lang.Number

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.userIdInput"></a>

```java
public java.lang.Number getUserIdInput();
```

- *Type:* java.lang.Number

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>

---


### BranchProtectionAllowedToPushList <a name="BranchProtectionAllowedToPushList" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.branch_protection.BranchProtectionAllowedToPushList;

new BranchProtectionAllowedToPushList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.get"></a>

```java
public BranchProtectionAllowedToPushOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>>

---


### BranchProtectionAllowedToPushOutputReference <a name="BranchProtectionAllowedToPushOutputReference" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.branch_protection.BranchProtectionAllowedToPushOutputReference;

new BranchProtectionAllowedToPushOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetUserId"></a>

```java
public void resetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.accessLevelDescription">accessLevelDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.userIdInput">userIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.userId">userId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `accessLevelDescription`<sup>Required</sup> <a name="accessLevelDescription" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.accessLevelDescription"></a>

```java
public java.lang.String getAccessLevelDescription();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.groupIdInput"></a>

```java
public java.lang.Number getGroupIdInput();
```

- *Type:* java.lang.Number

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.userIdInput"></a>

```java
public java.lang.Number getUserIdInput();
```

- *Type:* java.lang.Number

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>

---


### BranchProtectionAllowedToUnprotectList <a name="BranchProtectionAllowedToUnprotectList" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.branch_protection.BranchProtectionAllowedToUnprotectList;

new BranchProtectionAllowedToUnprotectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.get"></a>

```java
public BranchProtectionAllowedToUnprotectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>>

---


### BranchProtectionAllowedToUnprotectOutputReference <a name="BranchProtectionAllowedToUnprotectOutputReference" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.branch_protection.BranchProtectionAllowedToUnprotectOutputReference;

new BranchProtectionAllowedToUnprotectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resetUserId"></a>

```java
public void resetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.accessLevelDescription">accessLevelDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.userIdInput">userIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.userId">userId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `accessLevelDescription`<sup>Required</sup> <a name="accessLevelDescription" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.accessLevelDescription"></a>

```java
public java.lang.String getAccessLevelDescription();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.groupIdInput"></a>

```java
public java.lang.Number getGroupIdInput();
```

- *Type:* java.lang.Number

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.userIdInput"></a>

```java
public java.lang.Number getUserIdInput();
```

- *Type:* java.lang.Number

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>

---



