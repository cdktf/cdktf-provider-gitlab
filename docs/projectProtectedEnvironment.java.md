# `projectProtectedEnvironment` Submodule <a name="`projectProtectedEnvironment` Submodule" id="@cdktf/provider-gitlab.projectProtectedEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectProtectedEnvironment <a name="ProjectProtectedEnvironment" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_protected_environment gitlab_project_protected_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_protected_environment.ProjectProtectedEnvironment;

ProjectProtectedEnvironment.Builder.create(Construct scope, java.lang.String id)
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
    .environment(java.lang.String)
    .project(java.lang.String)
//  .approvalRules(IResolvable)
//  .approvalRules(java.util.List<ProjectProtectedEnvironmentApprovalRules>)
//  .deployAccessLevels(IResolvable)
//  .deployAccessLevels(java.util.List<ProjectProtectedEnvironmentDeployAccessLevels>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID or full path of the project which the protected environment is created against. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.approvalRules">approvalRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>></code> | Array of approval rules to deploy, with each described by a hash. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.deployAccessLevels">deployAccessLevels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>></code> | deploy_access_levels block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_protected_environment#environment ProjectProtectedEnvironment#environment}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID or full path of the project which the protected environment is created against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_protected_environment#project ProjectProtectedEnvironment#project}

---

##### `approvalRules`<sup>Optional</sup> <a name="approvalRules" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.approvalRules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>>

Array of approval rules to deploy, with each described by a hash.

Elements in the `approval_rules` should be one of `user_id`, `group_id` or `access_level`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_protected_environment#approval_rules ProjectProtectedEnvironment#approval_rules}

---

##### `deployAccessLevels`<sup>Optional</sup> <a name="deployAccessLevels" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.deployAccessLevels"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>>

deploy_access_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_protected_environment#deploy_access_levels ProjectProtectedEnvironment#deploy_access_levels}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.putApprovalRules">putApprovalRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.putDeployAccessLevels">putDeployAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.resetApprovalRules">resetApprovalRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.resetDeployAccessLevels">resetDeployAccessLevels</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApprovalRules` <a name="putApprovalRules" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.putApprovalRules"></a>

```java
public void putApprovalRules(IResolvable OR java.util.List<ProjectProtectedEnvironmentApprovalRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.putApprovalRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>>

---

##### `putDeployAccessLevels` <a name="putDeployAccessLevels" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.putDeployAccessLevels"></a>

```java
public void putDeployAccessLevels(IResolvable OR java.util.List<ProjectProtectedEnvironmentDeployAccessLevels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.putDeployAccessLevels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>>

---

##### `resetApprovalRules` <a name="resetApprovalRules" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.resetApprovalRules"></a>

```java
public void resetApprovalRules()
```

##### `resetDeployAccessLevels` <a name="resetDeployAccessLevels" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.resetDeployAccessLevels"></a>

```java
public void resetDeployAccessLevels()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectProtectedEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_protected_environment.ProjectProtectedEnvironment;

ProjectProtectedEnvironment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_protected_environment.ProjectProtectedEnvironment;

ProjectProtectedEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_protected_environment.ProjectProtectedEnvironment;

ProjectProtectedEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_protected_environment.ProjectProtectedEnvironment;

ProjectProtectedEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ProjectProtectedEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ProjectProtectedEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ProjectProtectedEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ProjectProtectedEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_protected_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ProjectProtectedEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.approvalRules">approvalRules</a></code> | <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList">ProjectProtectedEnvironmentApprovalRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.deployAccessLevels">deployAccessLevels</a></code> | <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList">ProjectProtectedEnvironmentDeployAccessLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.approvalRulesInput">approvalRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.deployAccessLevelsInput">deployAccessLevelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `approvalRules`<sup>Required</sup> <a name="approvalRules" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.approvalRules"></a>

```java
public ProjectProtectedEnvironmentApprovalRulesList getApprovalRules();
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList">ProjectProtectedEnvironmentApprovalRulesList</a>

---

##### `deployAccessLevels`<sup>Required</sup> <a name="deployAccessLevels" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.deployAccessLevels"></a>

```java
public ProjectProtectedEnvironmentDeployAccessLevelsList getDeployAccessLevels();
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList">ProjectProtectedEnvironmentDeployAccessLevelsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `approvalRulesInput`<sup>Optional</sup> <a name="approvalRulesInput" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.approvalRulesInput"></a>

```java
public java.lang.Object getApprovalRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>>

---

##### `deployAccessLevelsInput`<sup>Optional</sup> <a name="deployAccessLevelsInput" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.deployAccessLevelsInput"></a>

```java
public java.lang.Object getDeployAccessLevelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>>

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectProtectedEnvironmentApprovalRules <a name="ProjectProtectedEnvironmentApprovalRules" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_protected_environment.ProjectProtectedEnvironmentApprovalRules;

ProjectProtectedEnvironmentApprovalRules.builder()
//  .accessLevel(java.lang.String)
//  .groupId(java.lang.Number)
//  .groupInheritanceType(java.lang.Number)
//  .requiredApprovals(java.lang.Number)
//  .userId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Levels of access allowed to approve a deployment to this protected environment. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | The ID of the group allowed to approve a deployment to this protected environment. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.property.groupInheritanceType">groupInheritanceType</a></code> | <code>java.lang.Number</code> | Group inheritance allows deploy access levels to take inherited group membership into account. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.property.requiredApprovals">requiredApprovals</a></code> | <code>java.lang.Number</code> | The number of approval required to allow deployment to this protected environment. This is mutually exclusive with user_id. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.property.userId">userId</a></code> | <code>java.lang.Number</code> | The ID of the user allowed to approve a deployment to this protected environment. |

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

Levels of access allowed to approve a deployment to this protected environment.

Mutually exclusive with `user_id` and `group_id`. Valid values are `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_protected_environment#access_level ProjectProtectedEnvironment#access_level}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

The ID of the group allowed to approve a deployment to this protected environment.

The project must be shared with the group. Mutually exclusive with `access_level` and `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_protected_environment#group_id ProjectProtectedEnvironment#group_id}

---

##### `groupInheritanceType`<sup>Optional</sup> <a name="groupInheritanceType" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.property.groupInheritanceType"></a>

```java
public java.lang.Number getGroupInheritanceType();
```

- *Type:* java.lang.Number

Group inheritance allows deploy access levels to take inherited group membership into account.

Valid values are `0`, `1`. `0` => Direct group membership only, `1` => All inherited groups. Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_protected_environment#group_inheritance_type ProjectProtectedEnvironment#group_inheritance_type}

---

##### `requiredApprovals`<sup>Optional</sup> <a name="requiredApprovals" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.property.requiredApprovals"></a>

```java
public java.lang.Number getRequiredApprovals();
```

- *Type:* java.lang.Number

The number of approval required to allow deployment to this protected environment. This is mutually exclusive with user_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_protected_environment#required_approvals ProjectProtectedEnvironment#required_approvals}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

The ID of the user allowed to approve a deployment to this protected environment.

The user must be a member of the project. Mutually exclusive with `access_level` and `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_protected_environment#user_id ProjectProtectedEnvironment#user_id}

---

### ProjectProtectedEnvironmentConfig <a name="ProjectProtectedEnvironmentConfig" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_protected_environment.ProjectProtectedEnvironmentConfig;

ProjectProtectedEnvironmentConfig.builder()
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
    .environment(java.lang.String)
    .project(java.lang.String)
//  .approvalRules(IResolvable)
//  .approvalRules(java.util.List<ProjectProtectedEnvironmentApprovalRules>)
//  .deployAccessLevels(IResolvable)
//  .deployAccessLevels(java.util.List<ProjectProtectedEnvironmentDeployAccessLevels>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID or full path of the project which the protected environment is created against. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.approvalRules">approvalRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>></code> | Array of approval rules to deploy, with each described by a hash. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.deployAccessLevels">deployAccessLevels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>></code> | deploy_access_levels block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_protected_environment#environment ProjectProtectedEnvironment#environment}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID or full path of the project which the protected environment is created against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_protected_environment#project ProjectProtectedEnvironment#project}

---

##### `approvalRules`<sup>Optional</sup> <a name="approvalRules" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.approvalRules"></a>

```java
public java.lang.Object getApprovalRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>>

Array of approval rules to deploy, with each described by a hash.

Elements in the `approval_rules` should be one of `user_id`, `group_id` or `access_level`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_protected_environment#approval_rules ProjectProtectedEnvironment#approval_rules}

---

##### `deployAccessLevels`<sup>Optional</sup> <a name="deployAccessLevels" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.deployAccessLevels"></a>

```java
public java.lang.Object getDeployAccessLevels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>>

deploy_access_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_protected_environment#deploy_access_levels ProjectProtectedEnvironment#deploy_access_levels}

---

### ProjectProtectedEnvironmentDeployAccessLevels <a name="ProjectProtectedEnvironmentDeployAccessLevels" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_protected_environment.ProjectProtectedEnvironmentDeployAccessLevels;

ProjectProtectedEnvironmentDeployAccessLevels.builder()
//  .accessLevel(java.lang.String)
//  .groupId(java.lang.Number)
//  .groupInheritanceType(java.lang.Number)
//  .userId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Levels of access required to deploy to this protected environment. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | The ID of the group allowed to deploy to this protected environment. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.groupInheritanceType">groupInheritanceType</a></code> | <code>java.lang.Number</code> | Group inheritance allows deploy access levels to take inherited group membership into account. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.userId">userId</a></code> | <code>java.lang.Number</code> | The ID of the user allowed to deploy to this protected environment. |

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

Levels of access required to deploy to this protected environment.

Mutually exclusive with `user_id` and `group_id`. Valid values are `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_protected_environment#access_level ProjectProtectedEnvironment#access_level}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

The ID of the group allowed to deploy to this protected environment.

The project must be shared with the group. Mutually exclusive with `access_level` and `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_protected_environment#group_id ProjectProtectedEnvironment#group_id}

---

##### `groupInheritanceType`<sup>Optional</sup> <a name="groupInheritanceType" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.groupInheritanceType"></a>

```java
public java.lang.Number getGroupInheritanceType();
```

- *Type:* java.lang.Number

Group inheritance allows deploy access levels to take inherited group membership into account.

Valid values are `0`, `1`. `0` => Direct group membership only, `1` => All inherited groups. Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_protected_environment#group_inheritance_type ProjectProtectedEnvironment#group_inheritance_type}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

The ID of the user allowed to deploy to this protected environment.

The user must be a member of the project. Mutually exclusive with `access_level` and `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_protected_environment#user_id ProjectProtectedEnvironment#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectProtectedEnvironmentApprovalRulesList <a name="ProjectProtectedEnvironmentApprovalRulesList" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_protected_environment.ProjectProtectedEnvironmentApprovalRulesList;

new ProjectProtectedEnvironmentApprovalRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.get"></a>

```java
public ProjectProtectedEnvironmentApprovalRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>>

---


### ProjectProtectedEnvironmentApprovalRulesOutputReference <a name="ProjectProtectedEnvironmentApprovalRulesOutputReference" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_protected_environment.ProjectProtectedEnvironmentApprovalRulesOutputReference;

new ProjectProtectedEnvironmentApprovalRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resetGroupInheritanceType">resetGroupInheritanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resetRequiredApprovals">resetRequiredApprovals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetGroupInheritanceType` <a name="resetGroupInheritanceType" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resetGroupInheritanceType"></a>

```java
public void resetGroupInheritanceType()
```

##### `resetRequiredApprovals` <a name="resetRequiredApprovals" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resetRequiredApprovals"></a>

```java
public void resetRequiredApprovals()
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resetUserId"></a>

```java
public void resetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.accessLevelDescription">accessLevelDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.groupInheritanceTypeInput">groupInheritanceTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.requiredApprovalsInput">requiredApprovalsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.userIdInput">userIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.groupInheritanceType">groupInheritanceType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.requiredApprovals">requiredApprovals</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.userId">userId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLevelDescription`<sup>Required</sup> <a name="accessLevelDescription" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.accessLevelDescription"></a>

```java
public java.lang.String getAccessLevelDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.groupIdInput"></a>

```java
public java.lang.Number getGroupIdInput();
```

- *Type:* java.lang.Number

---

##### `groupInheritanceTypeInput`<sup>Optional</sup> <a name="groupInheritanceTypeInput" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.groupInheritanceTypeInput"></a>

```java
public java.lang.Number getGroupInheritanceTypeInput();
```

- *Type:* java.lang.Number

---

##### `requiredApprovalsInput`<sup>Optional</sup> <a name="requiredApprovalsInput" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.requiredApprovalsInput"></a>

```java
public java.lang.Number getRequiredApprovalsInput();
```

- *Type:* java.lang.Number

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.userIdInput"></a>

```java
public java.lang.Number getUserIdInput();
```

- *Type:* java.lang.Number

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

---

##### `groupInheritanceType`<sup>Required</sup> <a name="groupInheritanceType" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.groupInheritanceType"></a>

```java
public java.lang.Number getGroupInheritanceType();
```

- *Type:* java.lang.Number

---

##### `requiredApprovals`<sup>Required</sup> <a name="requiredApprovals" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.requiredApprovals"></a>

```java
public java.lang.Number getRequiredApprovals();
```

- *Type:* java.lang.Number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>

---


### ProjectProtectedEnvironmentDeployAccessLevelsList <a name="ProjectProtectedEnvironmentDeployAccessLevelsList" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_protected_environment.ProjectProtectedEnvironmentDeployAccessLevelsList;

new ProjectProtectedEnvironmentDeployAccessLevelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.get"></a>

```java
public ProjectProtectedEnvironmentDeployAccessLevelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>>

---


### ProjectProtectedEnvironmentDeployAccessLevelsOutputReference <a name="ProjectProtectedEnvironmentDeployAccessLevelsOutputReference" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_protected_environment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference;

new ProjectProtectedEnvironmentDeployAccessLevelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupInheritanceType">resetGroupInheritanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetGroupInheritanceType` <a name="resetGroupInheritanceType" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupInheritanceType"></a>

```java
public void resetGroupInheritanceType()
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetUserId"></a>

```java
public void resetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelDescription">accessLevelDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupInheritanceTypeInput">groupInheritanceTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.userIdInput">userIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupInheritanceType">groupInheritanceType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.userId">userId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLevelDescription`<sup>Required</sup> <a name="accessLevelDescription" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelDescription"></a>

```java
public java.lang.String getAccessLevelDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupIdInput"></a>

```java
public java.lang.Number getGroupIdInput();
```

- *Type:* java.lang.Number

---

##### `groupInheritanceTypeInput`<sup>Optional</sup> <a name="groupInheritanceTypeInput" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupInheritanceTypeInput"></a>

```java
public java.lang.Number getGroupInheritanceTypeInput();
```

- *Type:* java.lang.Number

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.userIdInput"></a>

```java
public java.lang.Number getUserIdInput();
```

- *Type:* java.lang.Number

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

---

##### `groupInheritanceType`<sup>Required</sup> <a name="groupInheritanceType" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupInheritanceType"></a>

```java
public java.lang.Number getGroupInheritanceType();
```

- *Type:* java.lang.Number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>

---



