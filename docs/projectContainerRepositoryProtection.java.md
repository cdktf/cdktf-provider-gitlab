# `projectContainerRepositoryProtection` Submodule <a name="`projectContainerRepositoryProtection` Submodule" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectContainerRepositoryProtection <a name="ProjectContainerRepositoryProtection" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_container_repository_protection gitlab_project_container_repository_protection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_container_repository_protection.ProjectContainerRepositoryProtection;

ProjectContainerRepositoryProtection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .project(java.lang.String)
    .repositoryPathPattern(java.lang.String)
//  .minimumAccessLevelForDelete(java.lang.String)
//  .minimumAccessLevelForPush(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | ID or URL-encoded path of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.repositoryPathPattern">repositoryPathPattern</a></code> | <code>java.lang.String</code> | Container repository path pattern protected by the protection rule. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.minimumAccessLevelForDelete">minimumAccessLevelForDelete</a></code> | <code>java.lang.String</code> | Minimum GitLab access level required to delete container images in the container registry. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.minimumAccessLevelForPush">minimumAccessLevelForPush</a></code> | <code>java.lang.String</code> | Minimum GitLab access level required to push container images to the container registry. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.project"></a>

- *Type:* java.lang.String

ID or URL-encoded path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_container_repository_protection#project ProjectContainerRepositoryProtection#project}

---

##### `repositoryPathPattern`<sup>Required</sup> <a name="repositoryPathPattern" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.repositoryPathPattern"></a>

- *Type:* java.lang.String

Container repository path pattern protected by the protection rule.

Wildcard character * allowed. Repository path pattern should start with the project's full path

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_container_repository_protection#repository_path_pattern ProjectContainerRepositoryProtection#repository_path_pattern}

---

##### `minimumAccessLevelForDelete`<sup>Optional</sup> <a name="minimumAccessLevelForDelete" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.minimumAccessLevelForDelete"></a>

- *Type:* java.lang.String

Minimum GitLab access level required to delete container images in the container registry.

For example maintainer, owner, admin. Must be provided when `minimum_access_level_for_push` is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_container_repository_protection#minimum_access_level_for_delete ProjectContainerRepositoryProtection#minimum_access_level_for_delete}

---

##### `minimumAccessLevelForPush`<sup>Optional</sup> <a name="minimumAccessLevelForPush" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.minimumAccessLevelForPush"></a>

- *Type:* java.lang.String

Minimum GitLab access level required to push container images to the container registry.

For example maintainer, owner or admin. Must be provided when `minimum_access_level_for_delete` is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_container_repository_protection#minimum_access_level_for_push ProjectContainerRepositoryProtection#minimum_access_level_for_push}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetMinimumAccessLevelForDelete">resetMinimumAccessLevelForDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetMinimumAccessLevelForPush">resetMinimumAccessLevelForPush</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetMinimumAccessLevelForDelete` <a name="resetMinimumAccessLevelForDelete" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetMinimumAccessLevelForDelete"></a>

```java
public void resetMinimumAccessLevelForDelete()
```

##### `resetMinimumAccessLevelForPush` <a name="resetMinimumAccessLevelForPush" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetMinimumAccessLevelForPush"></a>

```java
public void resetMinimumAccessLevelForPush()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectContainerRepositoryProtection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_container_repository_protection.ProjectContainerRepositoryProtection;

ProjectContainerRepositoryProtection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_container_repository_protection.ProjectContainerRepositoryProtection;

ProjectContainerRepositoryProtection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_container_repository_protection.ProjectContainerRepositoryProtection;

ProjectContainerRepositoryProtection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_container_repository_protection.ProjectContainerRepositoryProtection;

ProjectContainerRepositoryProtection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ProjectContainerRepositoryProtection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ProjectContainerRepositoryProtection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ProjectContainerRepositoryProtection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ProjectContainerRepositoryProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_container_repository_protection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ProjectContainerRepositoryProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.protectionRuleId">protectionRuleId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForDeleteInput">minimumAccessLevelForDeleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForPushInput">minimumAccessLevelForPushInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.repositoryPathPatternInput">repositoryPathPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForDelete">minimumAccessLevelForDelete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForPush">minimumAccessLevelForPush</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.repositoryPathPattern">repositoryPathPattern</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `protectionRuleId`<sup>Required</sup> <a name="protectionRuleId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.protectionRuleId"></a>

```java
public java.lang.Number getProtectionRuleId();
```

- *Type:* java.lang.Number

---

##### `minimumAccessLevelForDeleteInput`<sup>Optional</sup> <a name="minimumAccessLevelForDeleteInput" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForDeleteInput"></a>

```java
public java.lang.String getMinimumAccessLevelForDeleteInput();
```

- *Type:* java.lang.String

---

##### `minimumAccessLevelForPushInput`<sup>Optional</sup> <a name="minimumAccessLevelForPushInput" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForPushInput"></a>

```java
public java.lang.String getMinimumAccessLevelForPushInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `repositoryPathPatternInput`<sup>Optional</sup> <a name="repositoryPathPatternInput" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.repositoryPathPatternInput"></a>

```java
public java.lang.String getRepositoryPathPatternInput();
```

- *Type:* java.lang.String

---

##### `minimumAccessLevelForDelete`<sup>Required</sup> <a name="minimumAccessLevelForDelete" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForDelete"></a>

```java
public java.lang.String getMinimumAccessLevelForDelete();
```

- *Type:* java.lang.String

---

##### `minimumAccessLevelForPush`<sup>Required</sup> <a name="minimumAccessLevelForPush" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForPush"></a>

```java
public java.lang.String getMinimumAccessLevelForPush();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `repositoryPathPattern`<sup>Required</sup> <a name="repositoryPathPattern" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.repositoryPathPattern"></a>

```java
public java.lang.String getRepositoryPathPattern();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectContainerRepositoryProtectionConfig <a name="ProjectContainerRepositoryProtectionConfig" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_container_repository_protection.ProjectContainerRepositoryProtectionConfig;

ProjectContainerRepositoryProtectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .project(java.lang.String)
    .repositoryPathPattern(java.lang.String)
//  .minimumAccessLevelForDelete(java.lang.String)
//  .minimumAccessLevelForPush(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.project">project</a></code> | <code>java.lang.String</code> | ID or URL-encoded path of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.repositoryPathPattern">repositoryPathPattern</a></code> | <code>java.lang.String</code> | Container repository path pattern protected by the protection rule. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.minimumAccessLevelForDelete">minimumAccessLevelForDelete</a></code> | <code>java.lang.String</code> | Minimum GitLab access level required to delete container images in the container registry. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.minimumAccessLevelForPush">minimumAccessLevelForPush</a></code> | <code>java.lang.String</code> | Minimum GitLab access level required to push container images to the container registry. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

ID or URL-encoded path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_container_repository_protection#project ProjectContainerRepositoryProtection#project}

---

##### `repositoryPathPattern`<sup>Required</sup> <a name="repositoryPathPattern" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.repositoryPathPattern"></a>

```java
public java.lang.String getRepositoryPathPattern();
```

- *Type:* java.lang.String

Container repository path pattern protected by the protection rule.

Wildcard character * allowed. Repository path pattern should start with the project's full path

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_container_repository_protection#repository_path_pattern ProjectContainerRepositoryProtection#repository_path_pattern}

---

##### `minimumAccessLevelForDelete`<sup>Optional</sup> <a name="minimumAccessLevelForDelete" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.minimumAccessLevelForDelete"></a>

```java
public java.lang.String getMinimumAccessLevelForDelete();
```

- *Type:* java.lang.String

Minimum GitLab access level required to delete container images in the container registry.

For example maintainer, owner, admin. Must be provided when `minimum_access_level_for_push` is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_container_repository_protection#minimum_access_level_for_delete ProjectContainerRepositoryProtection#minimum_access_level_for_delete}

---

##### `minimumAccessLevelForPush`<sup>Optional</sup> <a name="minimumAccessLevelForPush" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.minimumAccessLevelForPush"></a>

```java
public java.lang.String getMinimumAccessLevelForPush();
```

- *Type:* java.lang.String

Minimum GitLab access level required to push container images to the container registry.

For example maintainer, owner or admin. Must be provided when `minimum_access_level_for_delete` is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_container_repository_protection#minimum_access_level_for_push ProjectContainerRepositoryProtection#minimum_access_level_for_push}

---



